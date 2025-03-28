from typing import Annotated
from fastapi import APIRouter, HTTPException, Query
from src.services.weather_api import (
    get_weather,
    get_24_hours_forecast,
    get_5_days_forecast,
)


router = APIRouter()

city_query = Query(
    min_length=3,
    max_length=20,
    description="Name of the city to get weather for",
)


@router.get("/weather")
async def weather(city: Annotated[str, city_query]):
    try:
        return await get_weather(city)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/get_24_hours_forecast")
async def forecast_24_hours(city: Annotated[str, city_query]):
    try:
        return await get_24_hours_forecast(city)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/get_5_days_forecast")
async def forecast_5_days(city: Annotated[str, city_query]):
    try:
        return await get_5_days_forecast(city)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
