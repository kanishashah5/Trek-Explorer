import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Wishlist.css"; // Create this CSS file for styling

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

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
  const userId = getCookie("userId");
  console.log("User ID from cookie:", userId);
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.post("http://localhost:8000/wishlist/get-wishlist/", {'user_id': getCookie("userId")});
        setWishlist(response.data);
      } catch (error) {
        console.error("There was an error fetching the wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  const handleRemoveFromWishlist = async (trekId) => {
    try {
      await axios.post(`http://localhost:8000/wishlist/remove_from_wishlist/`, { trek_id: trekId });
      // Remove the trek from the wishlist in the local state
      setWishlist(wishlist.filter(trek => trek.id !== trekId));
    } catch (error) {
      console.error("There was an error removing the trek from wishlist:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-banner">
        <h1 className="dashboard-title">Your Wishlist</h1>
      </div>
      <div className="wishlist-cards-container">
        {wishlist.length === 0 ? (
          <p className="no-wishlist-message">No items in your wishlist.</p>
        ) : (
          wishlist.map((trek, index) => (
            <div key={index} className="wishlist-card">
              <h2 className="wishlist-card-title">{trek.name}</h2>
              <p><strong>Location:</strong> {trek.location}</p>
              <p><strong>Price:</strong> ₹{trek.price}</p>
              <button 
                className="remove-from-wishlist-button"
                onClick={() => handleRemoveFromWishlist(trek.id)}
              >
                Remove from Wishlist
              </button>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
