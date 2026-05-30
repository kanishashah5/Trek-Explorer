from datetime import datetime
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
import json
import re
import uuid

client = MongoClient('mongodb://localhost:27017')

db=client.trekexplorer
user_collection=db.users
bookings_collection=db.bookings
treks_collection = db.treks

# trek_data ={
#         "trek_name": "hampta",
#         "itinerary": [
#             {
#                 'day': "Day 1",
#                 'title': "Arrive at GoTrek Jungle Line Campus, Manali by 8.00 am. Drive to Jobra Roadhead, and Trek to Jobra",
#                 'details': [
#                     "Drive Distance: 27 km | Drive Duration: 1 hour 20 minutes | Pick-up point for GoTrek trekkers: GoTrek Jungle Line Campus, Manali",
#                     "Trek Distance: 1.5 km | Trek Duration: 1 hour",
#                     "Get to GoTrek Jungle Line Campus, Manali by 8.00 AM. Start for Jobra immediately after lunch (3 hours drive). The cab fare is not included in the trek fee. It is to be shared by trekkers and paid directly to the driver. It costs Rs 3,200 per vehicle. Trek to Jobra campsite (30-minute trek).",
#                     "To reach Jungle Line Campus, you can either reach directly or choose the pick-up arranged by GoTrek from Beas Bridge, Manali at 7.00 am. The cost of the cab is Rs 1,000 and has to be shared by trekkers. The vehicles are non-AC.",
#                 ],
#             },
#             {
#                 'day': "Day 2",
#                 'title': "Trek from Jobra to Jwara",
#                 'details': [
#                     "Trek Distance: 4.50 km | Trek Duration: 4 hours | Altitude Gain: 8965 ft to 11005 ft",
#                 ],
#             },
#             {
#                 'day': "Day 3",
#                 'title': "Trek from Jwara to Balu Ka Ghera",
#                 'details': [
#                     "Trek Distance: 5 km | Trek Duration: 4 hours | Altitude Gain: 11005 ft to 12220 ft",
#                 ],
#             },
#             {
#                 'day': "Day 4",
#                 'title': "Trek from Balu ka Ghera to Shea Goru via Hampta Pass",
#                 'details': [
#                     "Trek Distance: 8 km | Trek Duration: 9 hours | Altitude Gain and Loss: 12220 ft to 12695 ft via 14,065 ft",
#                 ],
#             },
#             {
#                 'day': "Day 5",
#                 'title': "Trek from Shea Goru to Chhatru",
#                 'details': [
#                     "Trek Distance: 7 km | Trek Duration: 4.5 hours | Altitude Loss: 12695 ft to 10785 ft",
#                 ],
#             },
#             {
#                 'day': "Day 6",
#                 'title': "Drive from Chhatru to Manali. Optional: Drive from Chhatru to Chandratal Lake to Manali",
#                 'details': [
#                     "Drive Distance: 64 km | Drive Duration: 5 hours",
#                     "Optional: Drive Distance: 160 km total | Drive Duration: 9-10 hours | Altitude Gain: 10,785 ft to 14,036 ft",
#                     "5 hours drive on an SUV that can accommodate 7 trekkers. The transport cost from Chattru to Manali will be Rs 7,000 per vehicle.",
#                     "Optional: Visit Chandratal and then return to Manali. 9-10 hour drive. If you choose to visit Chandratal Lake, the transport cost would be Rs 9,000 per vehicle.",
#                     "Please note: The distance between campsites may vary by 100 meters depending on the weather conditions and the route you take. The altitude may also vary by 100 feet for similar reasons.",
#                 ],
#             },
#         ]
#     }

# trek_data1 = {
#         "trek_name": "saputara",
#         "itinerary": [
#             {
#                 'day': "Day 1",
#                 'title': "Arrival at Saputara & Activities",
#                 'details': [
#                     "09:00 AM | Visit Gira Waterfall & Depart for Saputara. The bus will arrive at the Gira Waterfalls followed by a 10 min halt at a hotel for refreshment. After visiting the falls, the bus will take the participants to the basecamp.",
#                     "The first thing we will do is to set up camps. The instructors will lead all the participants to their allotted tents or dormitory.",
#                 ],
#             },
#             {
#                 'day': "Day 2",
#                 'title': "Trekking",
#                 'details': [
#                     "06:30 AM | Breakfast & Departure for the Trek. The day will start with an early morning breakfast. We will quickly have breakfast and depart for the trek as soon as possible.",
#                     "09:00 AM | Trek to Governor Hill. Trek to Governor Hill and visit Table Point.",
#                     "08:00 PM | Musical Evening Time for some Garba and dance, have fun with your trek mates.",
#                     "09:00 PM | Dinner & Lights Off. The day would be a stretch for most of the trekkers. Have a proper sleep with a view to get ready for the next day’s schedule.",
#                 ],
#             },
#             {
#                 'day': "Day 3",
#                 'title': "Sightseeing & Start Return Journey",
#                 'details': [
#                     "Saputara is a home for multiple beautiful gardens and they happen to be in full bloom in the monsoon and post-monsoon days. The day would start with a trek to the sunrise point and then we will explore gardens, museums, and lake areas. After spending time in the town, we will head to the campsite for lunch. After having lunch, we will start our return journey full of memories and photos. Sing and dance in the bus as much as you can and get ready for the routine life from the next day.",
#                 ],
#             },
#         ],
#     }

# Insert the data into the collection
# treks_collection.insert_one(trek_data)
# treks_collection.insert_one(trek_data1)

@csrf_exempt
def signup(request):
    if request.method == "POST":

        data = json.loads(request.body)
        full_name=data["full_name"]
        username=data["username"]
        phone_number=data["phone_number"]
        email = data["email"]
        password = data["password"]
        cpass = data["confirm_password"]
        re_email = r"^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$"

        if not re.match(re_email, email):
            return JsonResponse(
                {"message": "Invalid Email , please enter a valid email address"}
            )

        re_password = r"^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%#?&]{8,}$"

        if not re.match(re_password, password):
            return JsonResponse(
                {
                    "message": "Invalid Password, please use a password of 8 or more characters having at least 1 symbol, 1 capital letter & 1 number"
                }
            )

        if password != cpass:
            return JsonResponse({"message": "Password does not match"})

        user_id = str(uuid.uuid4())

        data["user_id"] = user_id

        user = user_collection.find_one({"email": email})

        if user:
            return JsonResponse(
                {"message": "An account with this email already exists"}
            )

        else:
            user_collection.insert_one(data)

            return JsonResponse(
                {
                    "message": f"Welcome {username}",
                    "user_id": data["user_id"],
                    "success": True,
                },
                status=200,
            )
            
            
@csrf_exempt        
def login(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data["email"]
        password = data["password"]

        user = user_collection.find_one({"email": email})
        if user is not None:
            if password != user["password"]:
                return JsonResponse({"message": "Password is invalid"})
        else:
            return JsonResponse({"message": "No such user with this email found"})

        return JsonResponse(
            {
                "message": f"Welcome {email}",
                "user_id": user["user_id"],
                "success": True,
            },
            status=200,
        )


@csrf_exempt
def profile_view(request):
    if request.method == "POST":
        try:
            # Get the JSON data from the request
            data = json.loads(request.body)
            
            # Check if user_id is provided in the request data
            if not data.get("user_id"):
                return JsonResponse({"message": "User not authenticated"}, status=403)
            
            # Query user data based on user_id from the users collection
            user = user_collection.find_one({"user_id": data["user_id"]}, {
                "_id": 0,  # Exclude MongoDB's internal _id field
                "full_name": 1,
                "email": 1,
                "phone_number": 1
            })

            # If user not found, return an error
            if not user:
                return JsonResponse({"message": "User not found"}, status=404)

            # Return the user profile data as a JSON response
            return JsonResponse(user, status=200)
        
        except Exception as e:
            # Log the exception for debugging
            print(f"Error fetching user profile: {e}")
            return JsonResponse({"error": str(e)}, status=500)

    # If request method is not POST, return an error
    return JsonResponse({"error": "Invalid request method"}, status=400)


# views.py

@csrf_exempt
@csrf_exempt
def create_booking(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            
            # Extract all necessary fields
            state = data.get('state')
            trek = data.get('trek')
            total_price = (data.get('price'))  # Price per person
            number_of_persons = int(data.get('number_of_persons'))  # New field for number of persons
            trek_date_str = data.get('trek_date')
            emergency_contact_name = data.get('emergency_contact_name')
            emergency_contact_phone = data.get('emergency_contact_phone')
            accommodation = data.get('accommodation')
            special_requests = data.get('special_requests')
            payment_method = data.get('payment_method')
            liability_waiver = data.get('liability_waiver')
            user_id = data.get('user_id')
            
            # Validate required fields
            required_fields = [state, trek, total_price , number_of_persons, trek_date_str, emergency_contact_name, emergency_contact_phone, payment_method, liability_waiver, user_id]
            if not all(required_fields):
                return JsonResponse({"error": "Missing required fields"}, status=400)
            
            # Convert trek_date string to datetime object
            try:
                trek_date = datetime.strptime(trek_date_str, "%Y-%m-%d")
            except ValueError:
                return JsonResponse({"error": "Invalid date format. Use YYYY-MM-DD."}, status=400)
            
            # Generate a unique booking ID
            booking_id = str(uuid.uuid4())
            
            
            
            # Prepare booking data
            booking_data = {
                "booking_id": booking_id,
                "state": state,
                "trek": trek,
                "price": total_price,
                'number_of_persons':number_of_persons,# Store total price
                "trek_date": trek_date,
                "emergency_contact_name": emergency_contact_name,
                "emergency_contact_phone": emergency_contact_phone,
                "accommodation": accommodation,
                "special_requests": special_requests,
                "payment_method": payment_method,
                "liability_waiver": liability_waiver,
                "user_id": user_id,
                "created_at": datetime.utcnow()
            }
            
            # Insert booking into MongoDB
            bookings_collection.insert_one(booking_data)
            
            return JsonResponse({"message": "Booking created successfully!", "booking_id": booking_id}, status=201)
        
        except Exception as e:
            print(f"Error creating booking: {e}")
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"error": "Invalid request method"}, status=400)

# List Bookings View (GET)
@csrf_exempt
@csrf_exempt
def list_bookings(request):
    if request.method == "POST":
        try:
            # Fetch user ID from cookies
            data = json.loads(request.body)
            if not data["user_id"]:
                return JsonResponse({"message": "User not authenticated"}, status=403)
            # Query bookings for the current user
            bookings_cursor = bookings_collection.find({"user_id": data["user_id"]}, {
                "_id": 0,  # Exclude MongoDB's internal _id field
                "state": 1,
                "trek": 1,
                "price": 1,
                'number_of_persons':1,
                "trek_date": 1,
                "payment_method": 1
            })
            
            bookings_list = list(bookings_cursor)
            
            # Format trek_date to string for JSON serialization
            for booking in bookings_list:
                if 'trek_date' in booking and isinstance(booking['trek_date'], datetime):
                    booking['trek_date'] = booking['trek_date'].strftime("%Y-%m-%d")
            
            return JsonResponse(bookings_list, safe=False, status=200)
        
        except Exception as e:
            # Log the exception
            print(f"Error listing bookings: {e}")
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"error": "Invalid request method"}, status=400)

@csrf_exempt
def get_trek_details(request, trek_name):
    """
    Fetch trek details from MongoDB and return as JSON response.
    """
    trek = treks_collection.find_one({"trek_name": trek_name})
    
    if trek:
        # Convert MongoDB's ObjectId to a string (if needed)
        trek['_id'] = str(trek['_id'])
        return JsonResponse({
            "trek_name": trek['trek_name'],
            "itinerary": trek['itinerary']
        })
    else:
        return JsonResponse({"error": "Trek not found"}, status=404)