# # Базовый образ с Node.js
# FROM node:18

# # Директория внутри контейнера
# WORKDIR /app

# # Копируем package.json и yarn.lock
# COPY package.json yarn.lock ./

# # Устанавливаем зависимости
# RUN yarn install

# # Копируем остальной проект
# COPY . .

# # Собираем проект
# RUN yarn build

# # Открываем порт, на котором будет работать preview-сервер Vite
# EXPOSE 5174

# # Команда запуска preview-сервера
# CMD ["yarn", "preview", "--host", "--port", "5174"]


# frontend/Dockerfile
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock
# COPY frontend/package.json frontend/yarn.lock ./

# COPY frontend/front-apartment/package.json frontend/front-apartmen ./
COPY frontend/front-apartment ./

# Устанавливаем зависимости
RUN yarn install

# Копируем исходный код
# COPY frontend .
COPY frontend/front-apartment/ . 

# Строим проект для продакшн
RUN yarn build

# Устанавливаем HTTP сервер для обслуживания статики
RUN yarn global add serve

# Открываем порт для frontend
EXPOSE 5174

# Команда для запуска статического сервера
CMD ["yarn", "preview", "--host", "--port", "5174"]


