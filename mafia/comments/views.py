from django.shortcuts import render
from django.views import View
from django.http import HttpResponse,JsonResponse
from . import models
# Create your views here.
class SaveCommentDB(View):
    def get(self,request):
        return HttpResponse('h')
    def post(self,request):
        try:
            user_name = request.GET.get('name');
            user_lastname = request.GET.get('lastname');
            user_message = request.GET.get('message');
        
            models.CommentsModel.objects.create(writer_name=user_name,writer_lastname=user_lastname,writer_message=user_message)
        
            return JsonResponse({'status':'succses','added':True})
        except Exception as Ex:
            print(Ex)
            return JsonResponse({'status':'unsuccses','added':False})
        