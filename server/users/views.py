from django.shortcuts import render
from rest_framework import generics
from .models import Users
from .serializers import UsersSerializer

# Create your views here.
class Get_Users(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    
class UsersRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    lookup_field = 'user_id'