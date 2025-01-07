from redis.asyncio import Redis
from config import settings
import json
import logging


logging.basicConfig(level=logging.INFO)
redis_client = Redis(
    host="redis_server",
    port=6379,
    password=settings.REDIS_PASSWORD,
    decode_responses=True,
)


async def get_from_cache(redis: Redis, key: str):
    """
    Retrieve data from the Redis cache.

    Args:
        redis (Redis): Redis client instance.
        key (str): The key to look up in the cache.

    Returns:
        dict | None: The cached data as a dictionary if the key exists,
        otherwise None.
    """
    cached_data = await redis.get(key)
    if cached_data:
        logging.info(f"Cache hit for key: {key}")
        return json.loads(cached_data)
    logging.info(f"Cache miss for key: {key}")
    return None


async def save_in_cache(redis: Redis, key: str, value: dict, ttl: int = 3600):
    """
    Save data to the Redis cache with a specified time-to-live (TTL).

    Args:
        redis (Redis): Redis client instance.
        key (str): The key under which the value will be stored.
        value (dict): The data to store in the cache.
        ttl (int): The time-to-live for the cache entry in seconds.

    Returns:
        None
    """
    logging.info(f"Saving data to cache for key: {key} with TTL: {ttl} seconds")
    await redis.setex(key, ttl, json.dumps(value))
