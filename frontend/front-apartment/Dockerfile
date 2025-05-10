# Базовый образ с Node.js
FROM node:18

# Директория внутри контейнера
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем остальной проект
COPY . .

# Собираем проект
RUN yarn build

# Открываем порт, на котором будет работать preview-сервер Vite
EXPOSE 5174

# Команда запуска preview-сервера
CMD ["yarn", "preview", "--host", "--port", "5174"]

