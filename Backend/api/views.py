from django.shortcuts import render

from rest_framework import viewsets, permissions
from  .models import Photo
from .serializer import PhotoSerializer

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PhotoSerializer


