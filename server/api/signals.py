from django.db.models.signals import post_save
from django.dispatch import receiver
from . import models

@receiver(post_save, sender=models.User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        models.Profile.objects.create(user=instance)
    else:
        instance.profile.save()