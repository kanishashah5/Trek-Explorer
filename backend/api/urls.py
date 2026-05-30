from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),

    path('profile_view/', views.profile_view, name='profile_view'),
    path('bookings/', views.create_booking, name='create_booking'),
    path('yourbookings/', views.list_bookings, name='list_bookings'),
    path('trek/<str:trek_name>/', views.get_trek_details, name='get_trek_details'),

]

