import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../styles/UpdateProfile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  // useEffect(() => {
  //   // Fetch profile details from backend
  //   axios.get("http://localhost:8000/profile_view/",{'user_id':getCookie("userId")})
  //     .then(response => {
  //       setProfile(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       if (error.response && error.response.status === 403) {
  //         // If user is not authenticated, redirect to login page
  //         navigate("/login");
  //       } else {
  //         setError("Failed to fetch profile data");
  //         setLoading(false);
  //       }
  //     });
  // }, [navigate]);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.post("http://localhost:8000/profile_view/",{'user_id':getCookie("userId")});
        setProfile(response.data);
        setLoading(false);

      } catch (error) {
        navigate("/login");
        console.error("There was an error fetching the bookings:", error);
      }
    };

    fetchProfileDetails();
  }, []);
  

  if (loading) return <p className="updated-profile-loading">Loading...</p>;
  if (error) return <p className="updated-profile-error">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="profile-banner">
        <h1 className="profile-title">User Profile</h1>
      </div>
      <div className="updated-profile-bg">
        <div className="updated-profile-content">
          <h1 className="updated-profile-title">{profile.full_name}</h1>
          <div className="updated-profile-details">
            <div className="updated-profile-detail">
              <h2>Contact Number</h2>
              <p>{profile.phone_number}</p>
            </div>
            <div className="updated-profile-detail">
              <h2>Email</h2>
              <p>{profile.email}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
