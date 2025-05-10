# backend/Dockerfile
FROM python:3.10-slim

WORKDIR /app/configapp

COPY backend/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY backend .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]
