import React from "react";
import "../styles/InfoCard1.css";
import { FaMountain, FaHiking, FaMapSigns, FaCampground } from "react-icons/fa";

function Info() {
  return (
    <div className="info-container">
      <h1 style={{ textAlign: "center", color: "#63ab45" }}>TrekExplorer </h1>
      <br />
      <p className="info-p" >
      Discover new horizons with TrekExplorer, your trusted partner for exciting trekking adventures. Whether you're an experienced trekker or new to the trails we offer expert advice, essential tips, and top-notch gear recommendations to support your adventures.
      </p>
    <br />
      <div className="info-sections_home">
        <div className="info-section_home">
          <FaMountain className="info-icon_home" />
          <h2>Why Trekking?</h2>
          <p>
          Trekking offers a unique opportunity to immerse yourself in nature, push your physical and mental limits, and witness stunning landscapes. It's not just a walk; it's a thrilling adventure.
          </p>
        </div>
       
        <div className="info-section_home">
          <FaMapSigns className="info-icon_home" />
          <h2>Trekking Tips</h2>
          <p>
          Access top-notch guidance on trek preparation, packing essentials, and trail safety. With our expert tips, you’ll be well-prepared for a smooth and enjoyable trekking experience.
          </p>
        </div>

        <div className="info-section_home">
          <FaHiking className="info-icon_home" />
          <h2>Our Top Trails</h2>
          <p>
          Uncover some of the world’s most exceptional trekking routes, ranging from the majestic treks in Ladakh to the peaceful trails of Himachal Pradesh. Discover the perfect path for your experience and preferences.
          </p>
        </div>
        <div className="info-section_home">
          <FaCampground className="info-icon_home" />
          <h2>Advice</h2>
          <p>
          Prepare with the best gear for your trekking adventures. From robust hiking boots to weather-resistant tents, we offer recommendations for best equipment suitable for all environments and weather conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
