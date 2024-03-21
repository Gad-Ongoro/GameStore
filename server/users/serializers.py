from rest_framework import serializers
from .models import Users

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        # fields = '__all__'
        fields = ['user_id', 'user_name', 'email', 'role', 'password', 'created_at', 'updated_at']