from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.Get_Users.as_view(), name='get_all_users'),
    path('users/<uuid:user_id>/', views.UsersRetrieveUpdateDestroyAPIView.as_view(), name='user_RUD')
]