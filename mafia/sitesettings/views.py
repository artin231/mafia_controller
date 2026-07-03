from django.shortcuts import render
from . import models
from django.views.generic import View,DetailView
# Create your views here.

class SiteAboutView(View):
    def get(request):
        ActiveAbout = models.Site.objects.filter(True).first()

        

    def post(request):
        pass
