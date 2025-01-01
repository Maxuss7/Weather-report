from fastapi import APIRouter, HTTPException
from src.services.weather_api import get_weather, get_forecast


router = APIRouter()

@router.get("/weather")
async def weather(city: str):
    try:
        return await get_weather(city)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/forecast")
async def forecast(city: str):
    try:
        return await get_forecast(city)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
