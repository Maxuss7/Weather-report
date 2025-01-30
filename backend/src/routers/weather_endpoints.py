from typing import Annotated
from fastapi import APIRouter, HTTPException, Query
import src.services.weather_api as weather_api

router = APIRouter()

city_query = Query(
    min_length=2,
    max_length=50,
    description="Name of the city to get weather for",
)


@router.get("/weather")
async def weather(city: Annotated[str, city_query]):
    try:
        return await weather_api.get_weather(city)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/forecast")
async def forecast(city: Annotated[str, city_query]):
    try:
        return await weather_api.get_forecast(city)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
