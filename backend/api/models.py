from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.conf import settings

class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, full_name, password=None, phone_number=None):
        if not username:
            raise ValueError('The Username field must be set')
        if not email:
            raise ValueError('The Email field must be set')
        user = self.model(username=username, email=email, full_name=full_name, phone_number=phone_number)
        user.set_password(password)  
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, full_name, password=None):
        user = self.create_user(username, email, full_name, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractBaseUser, PermissionsMixin):
    full_name = models.CharField(max_length=255)
    username = models.CharField(max_length=150, unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'full_name']

    def _str_(self):
        return self.username
    
from django.utils import timezone
import random

class OTP(models.Model):
    email = models.EmailField(unique=True)
    otp_code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_valid(self):
        # OTP is valid for 5 minutes
        return (timezone.now() - self.created_at).total_seconds() < 300

    @staticmethod
    def generate_otp(email):
        otp_code = ''.join([str(random.randint(0, 9)) for _ in range(6)])
        otp, created = OTP.objects.update_or_create(
            email=email,
            defaults={'otp_code': otp_code}
        )
        return otp_code


class Profile(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    birthday = models.DateField()
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')])
    height = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    contact_number = models.CharField(max_length=20)
    email = models.EmailField()
    blood_group = models.CharField(max_length=5)
    address = models.TextField()
    
    def _str_(self):
        return f"{self.first_name}'s Profile"
    
class Booking(models.Model):
    state = models.CharField(max_length=100)
    trek = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    trek_date = models.DateField()
    emergency_contact_name = models.CharField(max_length=100)
    emergency_contact_phone = models.CharField(max_length=15)
    accommodation = models.TextField(blank=True, null=True)
    special_requests = models.TextField(blank=True, null=True)
    equipment_rental = models.TextField(blank=True, null=True)
    payment_method = models.CharField(max_length=50)
    liability_waiver = models.BooleanField(default=False)

    def _str_(self):
        return f"{self.trek} booking for {self.state}"