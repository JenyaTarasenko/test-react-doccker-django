from django.contrib import admin
from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter



app_name = 'apartment'

router = DefaultRouter()
router.register(r'apartments', ApartmentViewset, basename='apartments')

urlpatterns = [
    path('apartments', ApartmentList.as_view(), name="apartment-list"),
] 