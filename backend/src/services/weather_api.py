from fastapi import HTTPException
from httpx import HTTPStatusError
from src.config import settings
from src.services.HTTPClient import HTTPClient
from src.services.redis_cache import redis_client
from src.services.json_parser import filter_24_hours_forecast, filter_5_days_forecast


def handle_http_error(
    e: HTTPStatusError, default_message: str = "Unexpected error occurred"
) -> None:
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
    redis_client=redis_client,
)


async def get_weather(city: str) -> dict:
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


async def get_24_hours_forecast(city: str) -> list:
    """
    Fetch the forecast for a given city for the next 24 hours.

    Args:
        city (str): Name of the city.

    Returns:
        list: Forecast data for the next 24 hours (8 forecasts).
    """
    try:
        forecast_data = await weather_client.get("forecast", {"q": city})
        filtered_forecasts = filter_24_hours_forecast(forecast_data)
        return filtered_forecasts
    except HTTPStatusError as e:
        handle_http_error(e, default_message="Error fetching forecast data.")


async def get_5_days_forecast(city: str) -> list:
    """
    Fetch the forecast for a given city for the next 5 days (only 5 forecasts at 12:00).

    Args:
        city (str): Name of the city.

    Returns:
        list: Forecast data for the next 5 days.
    """
    try:
        forecast_data = await weather_client.get("forecast", {"q": city})
        filtered_forecasts = filter_5_days_forecast(forecast_data)
        return filtered_forecasts
    except HTTPStatusError as e:
        handle_http_error(e, default_message="Error fetching forecast data.")
