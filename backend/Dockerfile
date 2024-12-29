FROM python:3.10-slim

WORKDIR /app/backend

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./src /app/backend

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]