import React, { useEffect } from "react";
import { useNavigate ,useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/Carousel.css";
import "../../styles/Layout.css";
import "../../styles/trek_details.css";
import coorg from "../../assets/img12.jpg";
import dang from "../../assets/img12.jpg";
import hamta from "../../assets/img12.jpg";
import triund from "../../assets/img12.jpg";
import img2 from "../../assets/img1.jpg";
import img3 from "../../assets/hampta4.jpg";
import b2 from "../../assets/hm.jpg";

import rajmachi from "../../assets/img12.jpg";
import { FaMountain } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { CiMap } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import {
  FaUtensils,
  FaBed,
  FaChalkboardTeacher,
  FaFirstAid,
  FaBus,
  FaReceipt,
} from "react-icons/fa";
import { useState } from "react";

function Hamta() {
  const { trek_name } = useParams();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [itinerary, setItinerary] = useState([]);
  const [trekName, setTrekName] = useState("");
  const [isInWishlist, setIsInWishlist] = useState(false);

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
    var user_id = getCookie("userId")
    if (!user_id) {
      navigate("/login")
    }
  }, [])


  // for carousel
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExample');
    
    // Set the carousel to cycle automatically every 3 seconds (3000 ms)
    const interval = setInterval(() => {
      // Move to the next slide
      const nextButton = carouselElement.querySelector('.carousel-control-next');
      nextButton.click();
    }, 6000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  const sections = [
    {
      title: "Things to Carry",
      content:
        "List of items to carry for the trek: water bottles, snacks, trekking shoes, rain jacket, etc.",
    },
    {
      title: "Cancellation Policy",
      content:
        "Details about the cancellation policy: Refunds, deadlines, and terms.",
    },
    {
      title: "Inclusion and Exclusion",
      content:
        "Inclusions: Meals, accommodation, guide, etc. Exclusions: Personal expenses, insurance, etc.",
    },
    {
      title: "Rent/Purchase for the Trek",
      content: "tents, sleeping bags, etc.",
    },
    {
      title: "How to Reach Basecamp",
      content: "Reach manali and then come here",
    },
    {
      title: "How much fitness you need",
      content: "Must be physically fit",
    },
  ];

// for fetching iternary
  useEffect(() => {
    // Fetch trek details from the Django backend API
    const fetchTrekDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/trek/hampta/`);
        const data = await response.json();
        setItinerary(data.itinerary || []);;
        setTrekName(data.trek_name);
      } catch (error) {
        console.error("Error fetching trek details:", error);
      }
    };

    fetchTrekDetails();
  }, []);

  const handleWishlistToggle = async () => {
    const userId = getCookie("userId"); // Ensure you have a function to get the user ID from cookies
  
    if (!userId) {
      navigate("/login");
      return;
    }
  
    const message = isInWishlist ? "Removed from Wishlist!" : "Added to Wishlist!";
  
    try {
      if (!isInWishlist) {
        // Add to wishlist
        await axios.post(
          `http://localhost:8000/wishlist/add-to-wishlist/hampta/`,
          { user_id: userId },
          { headers: { "Content-Type": "application/json" } }
        );
      } else {
        // Remove from wishlist
        await axios.post(
          `http://localhost:8000/wishlist/remove-from-wishlist/hampta/`,
          { user_id: userId },
          { headers: { "Content-Type": "application/json" } }
        );
      }
      // Toggle the wishlist state after success
      setIsInWishlist(!isInWishlist);
      alert(message);
    } catch (error) {
      console.error("Error updating wishlist:", error);
      alert("There was an error updating the wishlist. Please try again.");
    }
  };
  

  useEffect(() => {
    const checkWishlistStatus = async () => {
      const userId = getCookie("userId");
      if (!userId) {
        setIsInWishlist(false);
        return;
      }
  
      try {
        const response = await axios.post(
          `http://localhost:8000/wishlist/get-wishlist/`,
          { user_id: userId },
          { headers: { "Content-Type": "application/json" } }
        );
        const wishlistedTreks = response.data;
        const isWishlisted = wishlistedTreks.some(
          (trek) => trek.trek_name === trek_name
        );
        setIsInWishlist(isWishlisted);
      } catch (error) {
        console.error("Error fetching wishlist status:", error);
      }
    };
  
    checkWishlistStatus();
  }, [trek_name]);
  


  return (
    <div className="layout-container">
      <Navbar />
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img2} className="d-block w-100" alt="First Slide" />
        </div>
        <div className="carousel-item">
          <img src={b2} className="d-block w-100" alt="Second Slide" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Third Slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      <br />
      <h3 style={{ textAlign: "center" }}>
        <span
          style={{
            textAlign: "center",
            color: "#63ab45",
            textDecoration: "underline",
          }}
        >
          Hampta Pass{" "}
        </span>{" "}
        - One of the Most Dramatic Crossover Treks in the Himalayas
      </h3>
      <div
        className="info-section"
        style={{ display: "flex", marginTop: "20px" }}
      >
        <div className="info-left" style={{ flex: 2, padding: "20px" }}>
          <ul type='none'>
            <li >
              <strong>Elevation and Landscape:</strong>
              <ul type='none'>
                <li>
                  Hampta Pass, at 14,000 feet, is one of the dramatic pass
                  crossings in the Himalayas.
                </li>
                <li>
                  On one side of the pass is the lush green valley of Kullu,
                  featuring forests, grasslands, and blooming flowers.
                </li>
                <li>
                  On the other side is the stark, arid landscape of Lahaul, with
                  barren mountains and minimal vegetation.
                </li>
              </ul>
            </li>

            <li>
              <strong>Scenic Contrast:</strong>
              <ul type='none'>
                <li>
                  Standing on top of the pass, you see two distinct worlds on
                  either side.
                </li>
                <li>
                  The transition between the two landscapes occurs within
                  minutes.
                </li>
              </ul>
            </li>

            <li>
              <strong>Comparison with Valley of Flowers:</strong>
              <ul type='none'>
                <li>
                  Hampta Pass is often compared to Himachal’s Valley of Flowers
                  due to its similar green narrow valley surrounded by
                  snow-covered mountains.
                </li>
                <li>
                  However, Hampta Pass offers an additional bonus with the
                  contrasting view on the other side.
                </li>
              </ul>
            </li>

            <li>
              <strong>Views and Terrain:</strong>
              <ul type='none'>
                <li>
                  Upon crossing the pass, trekkers are greeted with the rugged
                  terrain and barren stretches of Spiti Valley.
                </li>
                <li>
                  The area is known for its stark beauty and forget-me-not blue
                  skies.
                </li>
              </ul>
            </li>

            <li>
              <strong>Adventure and Experience:</strong>
              <ul type='none'>
                <li>The climb to Hampta Pass is thrilling and adventurous.</li>
                <li>
                  Trekkers experience nervous excitement as they navigate ledges
                  and uncertain paths leading to the pass.
                </li>
              </ul>
            </li>

            <li>
              <strong>Trek Details:</strong>
              <ul type='none'>
                <li>The trek spans 6 days and covers a distance of 25 km.</li>
              </ul>
            </li>
          </ul>
          <h5 style={{ textAlign: "center" }}>
            You can join us from Manali campsite
          </h5>
          <br />
          <p style={{ textAlign: "center" }}>
            {" "}
            <button
              onClick={() => {
                navigate("/book_trek");
              }}
              className="Finalize_button"
            >
              Book now!
            </button>
          </p>

          <p style={{ textAlign: "center" }}>
        <button onClick={handleWishlistToggle} className="Finalize_button">
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </p>

        </div>
        <div
          className="info-right"
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ textAlign: "center", color: "#63ab45" }}>
            Trek Details
          </h4>
          <br />
          <div className="details">
            <div className="detail-item">
              <IoCalendarOutline size={24} />
              <span>Duration: 5-6 Days</span>
            </div>
            <div className="detail-item">
              <FaMountain size={24} />
              <span>Difficulty: Moderate</span>
            </div>
            <div className="detail-item">
              <CiMap size={24} />
              <span>Max Altitude: 14,011 ft</span>
            </div>
            <div className="detail-item">
              <BsPeople size={24} />
              <span>Age Group: 16 to 35 years</span>
            </div>
            <div className="package-card">
              <h3>₹10,000 per person</h3>
              <div className="inclusions">
                <h5>Inclusions:</h5>
                <ul>
                  <li>
                    <FaUtensils className="icon" /> Food
                  </li>
                  <li>
                    <FaBed className="icon" /> Accommodation
                  </li>
                  <li>
                    <FaChalkboardTeacher className="icon" /> Instructor
                  </li>
                  <li>
                    <FaFirstAid className="icon" /> First Aid
                  </li>
                  <li>
                    <FaBus className="icon" /> Travelling
                  </li>
                  <li>
                    <FaReceipt className="icon" /> GST
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="itinerary-container">
        <h1 style={{ color: "#63ab45" }} className="itinerary-title">
          Itinerary of the Trek
        </h1>
        {itinerary.length > 0 ? ( // Conditional rendering
          itinerary.map((item, index) => (
            <div key={index} className="itinerary-day">
              <h2 className="day-title">{item.title}</h2>
              <ul className="day-details">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No itinerary details available.</p> // Fallback message
        )}
      </div>


      <div
        className="info-section"
        style={{ display: "flex", marginTop: "20px" }}
      >
        <div className="info-left" style={{ flex: 2, padding: "20px" }}>
          <h3 style={{ textAlign: "center", color: "#b8490e" }}>
            Things to know
          </h3>
          <div className="accordion-container">
            {sections.map((section, index) => (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggleIndex(index)}
                >
                  {section.title}
                </button>
                <div
                  className={`accordion-content ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="info-right"
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ textAlign: "center" }}>Campsite</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.127946515817!2d77.19015081487652!3d32.239809780897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39000380e5d2511d%3A0x74392c15e9cb0360!2sIndiahikes%20Jungle%20Line%20Campus!5e0!3m2!1sen!2sin!4v1634517372977!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Manali Campsite"
          ></iframe>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Hamta;
