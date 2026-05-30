import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/Layout.css";
import dudhsagar from "../../assets/dudhsagar.jpg";
import tambdi from "../../assets/tambdi.jpg";
import "../../styles/treks.css";

function Goa() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  const treks = [
    {
      name: "Dudhsagar Falls Trek",
      image: dudhsagar,
      description:
        "The Dudhsagar Falls Trek is one of the most popular treks in Goa, taking you through lush forests to the breathtaking Dudhsagar Waterfalls. The trek is moderate in difficulty and offers stunning views of the waterfalls, which are among the highest in India. Trekkers can enjoy the serene beauty of the Western Ghats and the thrill of walking along the railway tracks.",
      link: "/dudhsagar",
    },
    {
      name: "Tambdi Surla Trek",
      image: tambdi,
      description:
        "The Tambdi Surla Trek takes you to the ancient Tambdi Surla Temple, hidden deep in the jungles of Goa. This trek is relatively easy and is ideal for nature lovers and history enthusiasts. The trail is surrounded by dense forests and offers a chance to explore the rich biodiversity of the region. The temple, dating back to the 12th century, is a beautiful example of Kadamba architecture.",
      link: "/tambdi",
    },
  ];

  return (
    <div className="layout-container">
      <Navbar />
      
      <div className="goa-banner">
        <h1 className="dashboard-title">Goa</h1>
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

export default Goa;
