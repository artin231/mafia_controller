from django.db import models

# Create your models here.
class CommentsModel(models.Model):
    writer_name = models.CharField(max_length=300)
    writer_email = models.CharField(max_length=500)
    writer_message = models.TextField()