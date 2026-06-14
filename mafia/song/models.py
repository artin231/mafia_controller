from django.db import models

# Create your models here.

class Song(models.Model):
    name = models.CharField(max_length=400,verbose_name='اسم آهنگ')
    singer = models.CharField(max_length=200 , verbose_name='خواننده ی آهنگ')
    song = models.FileField(upload_to='song' , verbose_name='فایل آهنگ')

    class Meta:
        verbose_name='آهنگ'
        verbose_name_plural = 'آهنگ ها'