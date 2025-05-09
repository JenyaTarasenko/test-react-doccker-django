from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, re_path
from django.views.generic import TemplateView



urlpatterns = [
    path('admin/', admin.site.urls),  
    path('api/', include('apartment.urls', namespace='apartment')),
]


urlpatterns += [
    re_path(r"^(?!admin|api).*$", TemplateView.as_view(template_name="index.html"), name='home'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
