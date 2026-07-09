from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Site)
admin.site.register(models.Maker)