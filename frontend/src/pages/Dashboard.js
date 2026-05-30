import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Layout.css";
import "../styles/Dashboard.css"; // Create this CSS file for styling

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  return (
    <div className="layout-container">
      <Navbar />
      <div className="dashboard-banner">
        <h1 className="dashboard-title">User Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="profile-card">
          <div className="profile-card-header">
            <h2>User Profile</h2>
          </div>
          <div className="profile-card-body">
            <button onClick={()=>{navigate("/update_profile")}} className="profile-button">
              Go to Profile
            </button>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-card-header">
            <h2>Your Bookings</h2>
          </div>
          <div className="profile-card-body">
            <button onClick={()=>{navigate("/bookings")}} className="profile-button">
              Go to bookings
            </button>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-card-header">
            <h2>Your Wishlist</h2>
          </div>
          <div className="profile-card-body">
            <button onClick={()=>{navigate("/Wishlist")}} className="profile-button">
              Go to Wishlist
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
