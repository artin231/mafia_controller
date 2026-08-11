from django.urls import path
from . import views
urlpatterns = [
    path('api/message/',views.SaveCommentDB.as_view(),name='save_comment')
]