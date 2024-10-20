from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('users/register/', views.CreateUserView.as_view(), name='create_user'),
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<uuid:pk>/', views.UserDetailView.as_view(), name='User Detail'),
    
    path('products/', views.ProductList.as_view(), name='product_list'),
    path('product/<uuid:pk>/', views.ProductDetail.as_view(), name='product_detail'),
    
    path('profiles/', views.ProfileList.as_view(), name="Profile"),
]
