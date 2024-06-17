from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

# Create your models here.
# Abstract User Model
class CustomUser(AbstractUser):
    # Custom fields
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    email = models.EmailField(unique=True)

    # Related_name to avoid clashes with built-in User model
    groups = models.ManyToManyField('auth.Group', related_name='customuser_set', blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='customuser_set', blank=True)

    def __str__(self):
        return self.username
    
class Product(models.Model):
    type = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.CharField(max_length=100)

    def __str__(self):
        return self.title
    
class Cart(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return self.user.username
    
class Order(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    total_price = models.IntegerField()

    def __str__(self):
        return self.user.username