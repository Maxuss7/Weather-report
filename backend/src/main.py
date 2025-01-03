from fastapi import FastAPI
from src.routers.weather_endpoints import router as weather_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Weather App",
    description="App for getting information about weather.",
    versin="0.0.1",
)

origins = ["http://localhost:5173", "http://127.0.0.1:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(weather_router, prefix="/api", tags=["Weather"])
