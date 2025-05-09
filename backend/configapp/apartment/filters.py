import django_filters
from .models import Apartment


class ApartmentFilter(django_filters.FilterSet):
    price_min = django_filters.NumberFilter(field_name="price", lookup_expr='gte')
    price_max = django_filters.NumberFilter(field_name="price", lookup_expr='lte')
    search = django_filters.CharFilter(method='filter_search')
    
    
    class Meta:
        model = Apartment
        fields = ['price_min', 'price_max', 'number_of_rooms', 'availability']
        
        
    def filter_search(self, queryset, name, value): 
        return queryset.filter(
            models.Q(name__icontains=value) | models.Q(description__icontains=value)
        ) 