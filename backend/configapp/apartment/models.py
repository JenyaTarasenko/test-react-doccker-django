from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Apartment(models.Model):
    name = models.CharField(max_length=100)  # максимальная длина 100 символов
    slug = models.SlugField(unique=True)  # уникальный идентификатор
    description = models.TextField()  # описание квартиры
    price = models.DecimalField(max_digits=8, decimal_places=2)  # цена, тип decimal, макс. количество цифр 8, 2 десятичных знака
    number_of_rooms = models.IntegerField()  # количество комнат
    square = models.DecimalField(max_digits=8, decimal_places=2)  # площадь в квадратных метрах
    availability = models.BooleanField(default=True)  # доступность (boolean)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="apartments")  # внешний ключ к модели пользователя
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
