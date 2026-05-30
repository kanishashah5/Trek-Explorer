from rest_framework import serializers
from .models import CustomUser,Profile,Booking
from django.contrib.auth import authenticate


class CustomUserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['full_name', 'username', 'phone_number', 'email', 'password', 'confirm_password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
            full_name=validated_data['full_name'],
            phone_number=validated_data.get('phone_number')
        )
        return user
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            raise serializers.ValidationError("Both username and password are required.")

        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError("Invalid credentials.")
        
        return data
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'first_name', 'last_name', 'birthday', 'gender', 
            'height', 'weight', 'contact_number', 'email', 
            'blood_group', 'address'
        ]

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = [
            'state', 'trek', 'price', 'trek_date', 'emergency_contact_name',
            'emergency_contact_phone', 'accommodation', 'special_requests',
            'equipment_rental', 'payment_method', 'liability_waiver'
        ]
        extra_kwargs = {
            'price': {'required': True},
            'emergency_contact_name': {'required': True},
            'emergency_contact_phone': {'required': True},
        }
