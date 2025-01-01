import redis
import json
from src.config import settings

r = redis.Redis(host="localhost", port=6379, password=settings.REDIS_PASSWORD)

async def get_from_cache(key: str):
    """
    Retrieve data from the Redis cache.

    Args:
        key (str): The key to look up in the cache.

    Returns:
        dict | None: The cached data as a dictionary if the key exists,
        otherwise None.
    """
    cached_data = await redis.get(key)
    if cached_data:
        return json.loads(cached_data)
    return None

async def save_in_cache(key: str, value: dict, ttl: int = 3600):
    """
    Save data to the Redis cache with a specified time-to-live (TTL).

    Args:
        key (str): The key under which the value will be stored.
        value (dict): The data to store in the cache.
        ttl (int): The time-to-live for the cache entry in seconds.
            Defaults to 3600 seconds (1 hour).

    Returns:
        None
    """
    await redis.setex(key, ttl, json.dumps(value))