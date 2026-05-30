from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser, OTP, Profile, Booking
from .forms import CustomUserChangeForm, CustomUserCreationForm

class CustomUserAdmin(BaseUserAdmin):
    model = CustomUser
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    list_display = ('username', 'email', 'full_name', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')
    
    # Specify fields for detailed user view
    fieldsets = (
        (None, {'fields': ('username', 'email', 'full_name', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'user_permissions')}),
        ('Important Dates', {'fields': ('last_login', 'date_joined')}),
    )
    
    # Specify fields for adding a new user
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'full_name', 'password1', 'password2', 'is_staff', 'is_active'),
        }),
    )
    
    search_fields = ('username', 'email', 'full_name')
    ordering = ('username',)
    filter_horizontal = ('user_permissions',)

admin.site.register(CustomUser, CustomUserAdmin)

@admin.register(OTP)
class OTPAdmin(admin.ModelAdmin):
    list_display = ('email', 'otp_code', 'created_at')
    search_fields = ('email',)
    readonly_fields = ('created_at',)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'contact_number', 'birthday')
    search_fields = ('first_name', 'last_name', 'email')
    list_filter = ('gender', 'blood_group')
    readonly_fields = ('birthday',)

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('state', 'trek', 'price', 'trek_date', 'emergency_contact_name')
    search_fields = ('state', 'trek')
    list_filter = ('trek_date', 'payment_method')
    readonly_fields = ('trek_date',)