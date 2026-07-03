from django.urls import path
from . import views
urlpatterns = [
    path('about/' , views.SiteAboutView.as_view())
]