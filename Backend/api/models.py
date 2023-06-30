from django.db import models


class Photo(models.Model):
    nombre = models.CharField(max_length=50)
    imagen = models.CharField(max_length=250)
    descripcion = models.TextField()
    
    def __str__(self):
        return self.nombre
