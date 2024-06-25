from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models

# Register your models here.
admin.site.register(models.CustomUser, UserAdmin)
admin.site.register(models.Profile)
admin.site.register(models.ShippingAddress)
admin.site.register(models.Product)
admin.site.register(models.Cart)
admin.site.register(models.Order)
admin.site.register(models.Review)
admin.site.register(models.ProductImage)
admin.site.register(models.Payment)