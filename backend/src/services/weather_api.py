from src.config import settings
from src.services.HTTPClient import HTTPClient
from src.services.redis_cache import redis_client
from httpx import HTTPStatusError
from fastapi import HTTPException


def handle_http_error(
    e: HTTPStatusError, default_message: str = "Unexpected error occurred"
):
    """
    Handles HTTP request errors and converts them into an HTTPException.

    Args:
        e (HTTPStatusError): Exception from httpx containing the HTTP status code and response details.
        default_message (str): Default error message if no specific handling exists for the status code.

    Raises:
        HTTPException: FastAPI exception with appropriate status code and error message.
    """
    if e.response.status_code == 404:
        raise HTTPException(status_code=404, detail="City not found.")
    elif e.response.status_code >= 500:
        raise HTTPException(
            status_code=502, detail="Weather service is currently unavailable."
        )
    else:
        raise HTTPException(status_code=500, detail=default_message)


weather_client = HTTPClient(
    base_url=settings.WEATHER_API_URL,
    api_key=settings.WEATHER_API_KEY,
    redis_client=redis_client
)


async def get_weather(city: str):
    """
    Fetch the current weather for a given city.

    Args:
        city (str): Name of the city.

    Returns:
        dict: Weather data for the city.
    """
    try:
        return await weather_client.get("weather", {"q": city})
    except HTTPStatusError as e:
        handle_http_error(e, default_message="Error fetching weather data.")


async def get_forecast(city: str):
    """
    Fetch the forecast for a given city.

    Args:
        city (str): Name of the city.

    Returns:
        dict: Five day forecast, each day has 8 forecasts for each 3 hours.
    """
    try:
        return await weather_client.get("forecast", {"q": city})
    except HTTPStatusError as e:
        handle_http_error(e, default_message="Error fetching forecast data.")
