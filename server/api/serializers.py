from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = models.CustomUser.objects.create_user(**validated_data)
        return user
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = '__all__'
        
class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProductImage
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cart
        fields = '__all__'
        
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = '__all__'
        
class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ShippingAddress
        fields = "__all__"
        
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Payment
        fields = "__all__"

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Review
        fields = "__all__"