import httpx
from services.redis_cache import get_from_cache, save_in_cache


class HTTPClient:
    def __init__(
        self,
        base_url: str,
        api_key: str,
        units: str = "metric",
        lang: str = "ru",
        redis_client=None,
        ttl: int = 300,
    ):
        self.base_url = base_url
        self.api_key = api_key
        self.units = units
        self.lang = lang
        self.redis = redis_client
        self.ttl = ttl

    async def get(self, endpoint: str, params: dict = None):
        """
        Perform a GET request to the API with caching.

        Args:
            endpoint (str): The API endpoint to call.
            params (dict, optional): Additional query parameters for the request.

        Returns:
            dict: The API response.
        """
        if params is None:
            params = {}
        params.update({"appid": self.api_key, "units": self.units, "lang": self.lang})

        cache_key = self._build_cache_key(endpoint, params)

        # Check cache
        if self.redis:
            cached_data = await get_from_cache(self.redis, cache_key)
            if cached_data:
                return cached_data

        # If cache miss
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{self.base_url}/{endpoint}", params=params)
            response.raise_for_status()
            data = response.json()

        # Save in cache
        if self.redis:
            await save_in_cache(self.redis, cache_key, data, self.ttl)

        return data

    def _build_cache_key(self, endpoint, params: dict) -> str:
        """
        Build a cache key based on the city name (parameter 'q').

        Args:
            params (dict): The query parameters.

        Returns:
            str: A unique cache key based on the city.
        """
        city = params.get("q").lower()
        req_type = endpoint.split("?")[0]

        return f"{req_type}:{city}"
