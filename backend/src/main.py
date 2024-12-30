from fastapi import FastAPI
from src.routers.weather_endpoints import router as weather_router

app = FastAPI(
    title="Weather App",
    description="App for getting information about weather.",
    versin="0.0.1"    
)

app.include_router(weather_router, prefix="/api", tags=["Weather"])

