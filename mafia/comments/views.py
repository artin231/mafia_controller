from django.shortcuts import render
from django.views import View
from django.http import HttpResponse,JsonResponse
from . import models
# Create your views here.
class SaveCommentDB(View):
    def get(self,request):
        try:
            user_name = request.GET.get('name');
            user_email = request.GET.get('email');
            user_message = request.GET.get('message');
        
            models.CommentsModel.objects.create(writer_name=user_name,writer_email=user_email,writer_message=user_message)
        
            return JsonResponse({'status':'succses','added':True})
        except Exception as Ex:
            print(Ex)
            return JsonResponse({'status':'unsuccses','added':False})
    def post(self,request):
        try:
            user_name = request.POST.get('name');
            user_email = request.POST.get('email');
            user_message = request.POST.get('message');
        
            models.CommentsModel.objects.create(writer_name=user_name,writer_email=user_email,writer_message=user_message)
        
            return JsonResponse({'status':'succses','added':True})
        except Exception as Ex:
            print(Ex)
            return JsonResponse({'status':'unsuccses','added':False})
        