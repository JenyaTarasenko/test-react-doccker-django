# backend/Dockerfile
# FROM python:3.10-slim

# WORKDIR /app/configapp

# COPY backend/requirements.txt .

# RUN pip install --no-cache-dir -r requirements.txt

# COPY backend .

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]
#---------------------------------------------------------------------------------


# # backend/Dockerfile
# FROM python:3.10-slim

# # Устанавливаем рабочую директорию
# # WORKDIR /app/backend
# WORKDIR /app/backend/configapp

# # Копируем зависимости
# # COPY backend/requirements.txt .

# RUN pip install --no-cache-dir -r requirements.txt

# # Копируем весь проект
# COPY backend .

# # Открываем порт для доступа к API
# EXPOSE 8001

# # Команда для запуска приложения
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]


FROM python:3.10-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл зависимостей
COPY backend/requirements.txt .

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь код проекта
COPY backend/configapp ./configapp

# Устанавливаем рабочую директорию как папку с Django-проектом
WORKDIR /app/configapp

# Открываем порт
EXPOSE 8001

# Запуск Django-сервера
CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]
