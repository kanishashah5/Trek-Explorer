import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/Layout.css";
import Mahabaleshwar from "../../assets/kalsubai.jpg";
import matheran from "../../assets/matheran.jpg";
import "../../styles/treks.css";

function Maharashtra() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  const treks = [
    {
      name: "Mahabaleshwar Trek",
      image: Mahabaleshwar,
      description:
        "Nestled in the Sahyadri mountains, these twin towns offer a refreshing getaway. Mahabaleshwar, the 'Queen of Hill Stations,' boasts stunning landscapes, from waterfalls to boating lakes. Panchgani, its charming neighbor, is known for its scenic plateaus and peaceful vibes. Together, they provide a perfect blend of adventure and relaxation, making them ideal for a quick weekend trip!",
      link: "/kalsubai",
    },
    {
      name: "Matheran Trek",
      image: matheran,
      description:
        "Matheran is situated near Mumbai in Maharashtra and is known for its misty mountains, toy trains and typical sahyadri weather. Marvelous Matheran is an event where trekkers will enjoy the misty mountains and hilly weather. The place is highly populated on weekends",
      link: "/rajmachi",
    },
    // Add more trek objects as needed
  ];

  return (
    <div className="layout-container">
      <Navbar />
      <div className="mh-banner">
        <h1 className="dashboard-title">Maharashtra</h1>
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

export default Maharashtra;
