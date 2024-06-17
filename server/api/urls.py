from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/user/register/', views.CreateUserView.as_view(), name='create_user'),
    path('api/users/', views.UserList.as_view(), name='user_list'),
    
    path('api/products/', views.ProductList.as_view(), name='product_list'),
    path('api/product/<int:pk>/', views.ProductDetail.as_view(), name='product_detail'),
    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls')),
]
