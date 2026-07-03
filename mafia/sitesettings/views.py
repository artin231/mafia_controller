from django.shortcuts import render
from . import models
from django.views.generic import View,DetailView
# Create your views here.

class SiteAboutView(View):
    def get(self,request):
        ActiveAbout = models.Site.objects.filter(is_active=True).first()
        return render(request,'sitesettings/about.html',{})


    def post(request):
        pass
