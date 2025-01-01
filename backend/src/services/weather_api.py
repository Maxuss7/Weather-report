from src.config import settings
from src.services.HTTPClient import HTTPClient


weather_client = HTTPClient(base_url=settings.WEATHER_API_URL, api_key=settings.WEATHER_API_KEY)

async def get_weather(city: str):
    return await weather_client.get("weather", {"q": city})

async def get_forecast(city: str):
    return await weather_client.get("forecast", {"q": city})
