from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly
from . import models
from . import serializers

# Create your views here.
# create user
class CreateUserView(generics.CreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [AllowAny]

# get users
class UserList(generics.ListAPIView):
    queryset = models.User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = serializers.UserSerializer

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = serializers.UserSerializer

# profiles
# Created Automatically when a user Signs Up through Django app signaling
class ProfileList(generics.ListAPIView):
    # queryset = models.Profile.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.ProfileSerializer

    def get_queryset(self):
        user = self.request.user
        return models.Profile.objects.filter(user = user)

# create & list products
class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.ProductSerializer

    def get_queryset(self):
        # get authenticated user
        user = self.request.user
        # return models.Product.objects.filter(user=user) # products created by a specific user
        return models.Product.objects.all() # all products by all users

# get products
class ProductDetail(generics.RetrieveAPIView):
    queryset = models.Product.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.ProductSerializer

# delete product
class ProductDelete(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.ProductSerializer

    def get_queryset(self):
        user = self.request.user
        return models.Product.objects.filter(user=user)

# update product
class ProductUpdate(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.ProductSerializer

    def get_queryset(self):
        user = self.request.user
        return models.Product.objects.filter(user=user)

# create cart
class CartCreate(generics.CreateAPIView):
    queryset = models.Cart.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.CartSerializer

# list cart 
class CartList(generics.ListAPIView):
    queryset = models.Cart.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.CartSerializer

class CartDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Cart.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.CartSerializer

    def get_queryset(self):
        user = self.request.user
        return models.Cart.objects.filter(user=user)