from django.db import models

# Create your models here.

class Song(models.Model):
    name = models.CharField(max_length=400)
    singer = models.CharField(max_length=200)
    song = models.FileField(upload_to='song')