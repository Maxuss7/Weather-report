import httpx
from src.config import settings

async def get_weather(city: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{settings.WEATHER_API_URL}/weather",
            params={"q": city, "appid": settings.WEATHER_API_KEY, "units": "metric"}
        )
        return response.json()

async def get_forecast(city: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{settings.WEATHER_API_URL}/forecast",
            params={"q": city, "appid": settings.WEATHER_API_KEY, "units": "metric"}
        )
        return response.json()
