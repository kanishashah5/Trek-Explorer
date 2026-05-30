import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/Layout.css";
import agasthyakoodam from "../../assets/agashyakodoom.jpg";
import chembra from "../../assets/chembra.jpeg";
import "../../styles/treks.css";

function Kerala() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  const treks = [
    {
      name: "Agasthyakoodam Trek",
      image: agasthyakoodam,
      description:
        "The Agasthyakoodam Trek is one of the most renowned treks in Kerala, located in the Western Ghats. This trek takes you to the peak of Agasthyakoodam, one of the highest peaks in the region, known for its rich biodiversity and medicinal plants. The trek is moderately difficult and offers trekkers a chance to experience the serene beauty of the forests and the unique flora and fauna of the area.",
      link: "/agasthyakoodam",
    },
    {
      name: "Chembra Peak Trek",
      image: chembra,
      description:
        "The Chembra Peak Trek in Wayanad is one of the most popular trekking destinations in Kerala. The trek leads to the highest peak in the Wayanad district, offering panoramic views of the surrounding hills and valleys. The highlight of the trek is the heart-shaped lake, known as Hridaya Saras, which is believed to never dry up. The trek is moderate in difficulty and is suitable for both beginners and experienced trekkers.",
      link: "/chembra",
    },
  ];

  return (
    <div className="layout-container">
      <Navbar />
    
      <div className="kerala-banner">
        <h1 className="dashboard-title">Kerala</h1>
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

export default Kerala;
