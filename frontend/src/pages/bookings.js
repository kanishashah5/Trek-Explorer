import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Booking.css"; // Create this CSS file for styling

function Booking() {
  const [bookings, setBookings] = useState([]);

  const getCookie = (name) => {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  };
  
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.post("http://localhost:8000/yourbookings/",{'user_id':getCookie("userId")});
        setBookings(response.data);
      } catch (error) {
        console.error("There was an error fetching the bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-banner">
        <h1 className="dashboard-title">Your Bookings</h1>
      </div>
      <div className="booking-cards-container">
        {bookings.length === 0 ? (
          <p className="no-bookings-message">No bookings found.</p>
        ) : (
          bookings.map((booking, index) => (
            <div key={index} className="booking-card">
               <h2 className="booking-card-title">{booking.trek}</h2>
              <p><strong>State:</strong> {booking.state}</p>
              <p><strong>Number of Persons:</strong> {booking.number_of_persons}</p>
              <p><strong>Total Price:</strong> ₹{booking.price}</p>
              <p><strong>Trek Date:</strong> {new Date(booking.trek_date).toLocaleDateString()}</p>
              <p><strong>Payment Method:</strong> {booking.payment_method}</p>            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Booking;
