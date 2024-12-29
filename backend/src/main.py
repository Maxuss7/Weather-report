from fastapi import FastAPI

app = FastAPI(title="Weather App")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Weather App"}
