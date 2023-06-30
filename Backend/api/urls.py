from rest_framework.routers import DefaultRouter
from .views import PhotoViewSet
from django.urls import path, include

router = DefaultRouter()

router.register('photos', PhotoViewSet, 'photo')

urlpatterns = [
    path('api/', include(router.urls))
]

