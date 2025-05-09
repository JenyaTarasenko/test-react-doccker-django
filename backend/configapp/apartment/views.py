from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Apartment
from .serializers import ApartmentSerializer
from .filters import ApartmentFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets


class ApartmentList( APIView):
    def get(self, request):
        apartments = Apartment.objects.all()
        serializer = ApartmentSerializer(apartments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class ApartmentViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Apartment.objects.all().order_by('-id')
    serializer_class = ApartmentSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ApartmentFilter
        
    
    
    




