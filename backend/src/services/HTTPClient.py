import httpx


class HTTPClient:
    def __init__(self, base_url: str, api_key: str, units: str = "metric"):
        self.base_url = base_url
        self.api_key = api_key
        self.units = units

    async def get(self, endpoint: str, params: dict = None):
        if params is None:
            params = {}
        params.update({"appid": self.api_key, "units": self.units})
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{self.base_url}/{endpoint}", params=params)
            response.raise_for_status()
            return response.json()  