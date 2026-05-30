from django.urls import path
from . import views

urlpatterns = [
    path('add-to-wishlist/<str:trek_name>/', views.add_to_wishlist, name='add_to_wishlist'),
    path('remove-from-wishlist/<str:trek_name>/', views.remove_from_wishlist, name='remove_from_wishlist'),
    path('get-wishlist/', views.get_wishlist, name='get_wishlist')
    ]