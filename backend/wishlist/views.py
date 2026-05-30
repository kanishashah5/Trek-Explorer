from datetime import datetime
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from pymongo import MongoClient
import json
import re
import uuid


client = MongoClient('mongodb://localhost:27017')
db=client.trekexplorer
wishlist_collection = db.wishlist
treks_collection = db.treks


# @login_required
@csrf_exempt
def add_to_wishlist(request, trek_name):
    if request.method == "POST":
        try:
            # Ensure the user is authenticated (you can replace this with your authentication logic)
            data = json.loads(request.body)
            user_id = data.get("user_id")
            
            if not user_id:
                return JsonResponse({"message": "User not authenticated"}, status=403)

            # Fetch trek_id from the trek_name (this assumes you're storing treks with a unique trek_name)
            trek = treks_collection.find_one({"trek_name": trek_name})
            if not trek:
                return JsonResponse({"message": "Trek not found"}, status=404)

            trek_id = trek.get("_id")

            # Check if the trek is already in the user's wishlist
            existing_wishlist = wishlist_collection.find_one({
                "user_id": user_id,
                "trek_id": trek_id
            })

            if existing_wishlist:
                return JsonResponse({"message": "Trek already in wishlist"}, status=400)

            # Add to wishlist
            wishlist_id = str(uuid.uuid4())
            wishlist_data = {
                "wishlist_id": wishlist_id,
                "user_id": user_id,
                "trek_id": trek_id,
                "trek_name": trek_name,
                "added_at": datetime.utcnow()
            }
            wishlist_collection.insert_one(wishlist_data)

            return JsonResponse({"message": "Trek added to wishlist", "wishlist_id": wishlist_id}, status=201)

        except Exception as e:
            print(f"Error adding to wishlist: {e}")
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=400)


@csrf_exempt
def remove_from_wishlist(request, trek_name):
    if request.method == "POST":
        try:
            # Ensure the user is authenticated
            data = json.loads(request.body)
            user_id = data.get("user_id")

            if not user_id:
                return JsonResponse({"message": "User not authenticated"}, status=403)

            # Fetch trek_id from the trek_name
            trek = treks_collection.find_one({"trek_name": trek_name})
            if not trek:
                return JsonResponse({"message": "Trek not found"}, status=404)

            trek_id = trek.get("_id")

            # Check if the trek exists in the user's wishlist
            wishlist_item = wishlist_collection.find_one({
                "user_id": user_id,
                "trek_id": trek_id
            })

            if not wishlist_item:
                return JsonResponse({"message": "Trek not in wishlist"}, status=404)

            # Remove from wishlist
            wishlist_collection.delete_one({"_id": wishlist_item["_id"]})

            return JsonResponse({"message": "Trek removed from wishlist"}, status=200)

        except Exception as e:
            print(f"Error removing from wishlist: {e}")
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=400)
@csrf_exempt
def get_wishlist(request):
    if request.method == "POST":
        try:
            # Ensure the user is authenticated
            data = json.loads(request.body)
            user_id = data.get("user_id")

            # Debugging: Check if user_id is received properly
            print(f"User ID received: {user_id}")

            if not user_id:
                return JsonResponse({"message": "User not authenticated"}, status=403)

            # Query wishlist for the current user
            wishlist_cursor = wishlist_collection.find({"user_id": user_id}, {
                "_id": 0,  # Exclude MongoDB's internal _id field
                "trek_id": 1,
                "trek_name": 1,
                "added_at": 1
            })

            wishlist_items = list(wishlist_cursor)

            # Debugging: Print the fetched wishlist items
            print(f"Wishlist items: {wishlist_items}")

            # Format added_at to string for JSON serialization
            for item in wishlist_items:
                if 'added_at' in item and isinstance(item['added_at'], datetime):
                    item['added_at'] = item['added_at'].strftime("%Y-%m-%d")

            return JsonResponse(wishlist_items, safe=False, status=200)

        except Exception as e:
            # Log the exception for debugging
            print(f"Error listing wishlist items: {e}")
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=400)
