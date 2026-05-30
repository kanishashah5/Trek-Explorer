import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/Layout.css";
import chadar from "../../assets/chadar.png";
import stok from "../../assets/stok.jpg";
import "../../styles/treks.css";

function Ladakh() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);

  const treks = [
    {
      name: "Chadar Trek",
      image: chadar,
      description:
        "The Chadar Trek is one of the most unique and challenging treks in India, located in the Zanskar region of Ladakh. This winter trek involves walking on the frozen Zanskar River, which forms a 'chadar' (sheet of ice). Trekkers experience sub-zero temperatures, stunning ice formations, and the raw beauty of the winter landscape in this once-in-a-lifetime adventure.",
      link: "/chadar",
    },
    {
      name: "Stok Kangri Trek",
      image: stok,
      description:
        "The Stok Kangri Trek is a high-altitude adventure in Ladakh, taking trekkers to the summit of Stok Kangri, one of the highest peaks in the region. This trek is challenging and requires acclimatization, but rewards trekkers with breathtaking views of the Ladakh Range, Zanskar Range, and the distant Karakoram Range. It's a must-do for experienced trekkers looking for a Himalayan challenge.",
      link: "/stok",
    },
  ];

  return (
    <div className="layout-container">
      <Navbar />

      <div className="ladakh-banner">
        <h1 className="dashboard-title">Ladakh</h1>
      </div>
      {treks.map((trek, index) => (
        <div
          key={index}
          className="trek-section"
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0",
            cursor: "pointer",
          }}
          onClick={() => navigate(trek.link)}
        >
          <div className="trek-image" style={{ flex: 1 }}>
            <img src={trek.image} alt={trek.name} style={{ width: "100%" }} />
          </div>
          <div className="trek-details" style={{ flex: 2, padding: "20px" }}>
            <h2>{trek.name}</h2>
            <p>{trek.description}</p>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Ladakh;
