from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    WEATHER_API_KEY: str
    WEATHER_API_URL: str = "https://api.openweathermap.org/data/2.5"

    REDIS_PASSWORD: str


settings = Settings()
