from rest_framework import serializers
from .models import Apartment
from django.conf import settings

class ApartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apartment
        fields = '__all__'
