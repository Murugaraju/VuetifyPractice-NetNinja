from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import Todo
from .serializers import TodoModelSerializer
import time
# Create your views here.

class TodoModelViewSet(ModelViewSet):
    queryset=Todo.objects.all()
    serializer_class=TodoModelSerializer
    def list(self,request,*args,**kwargs):
        time.sleep(2)
        return super().list(self,request,*args,**kwargs)