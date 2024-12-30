from fastapi import APIRouter
from src.services.weather_api import get_weather

router = APIRouter()

@router.get("/test")
def test():
    return {"message": "test"}

@router.get("/weather")
async def weather(city: str):
    try:
        return await get_weather(city)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
