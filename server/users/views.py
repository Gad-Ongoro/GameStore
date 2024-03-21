from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Users
from .serializers import UsersSerializer
from rest_framework.views import APIView

# Create your views here.
class Get_Users(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    
    def delete(self, request, *args, **kwargs):
        Users.objects.all()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
    
class UsersRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer
    lookup_field = 'user_id'
    
    

# Self Defined APIView

# class Users_Resource(APIView):
#     def get():
#         pass
    
#     def post():
#         pass