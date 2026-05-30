import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/Layout.css";
import livingRoots from "../../assets/img12.jpg";
import nokrek from "../../assets/img12.jpg";
import "../../styles/treks.css";

function Meghalaya() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  const treks = [
    {
      name: "Living Root Bridges Trek",
      image: livingRoots,
      description:
        "The Living Root Bridges Trek in Meghalaya is a unique and fascinating experience, taking you to the natural root bridges formed by the Khasi tribes. These bridges, made from the roots of ancient rubber trees, are a testament to the ingenuity of the local people. The trek is relatively easy and offers trekkers a chance to explore the lush greenery and rich cultural heritage of the region.",
      link: "/living-root-bridges",
    },
    {
      name: "Nokrek Peak Trek",
      image: nokrek,
      description:
        "The Nokrek Peak Trek takes you to the highest peak in the Garo Hills of Meghalaya. This trek is moderately challenging and offers stunning views of the surrounding hills, dense forests, and rich wildlife. Nokrek Biosphere Reserve is home to the rare Red Panda and a variety of other flora and fauna. The trek is ideal for nature lovers and adventure enthusiasts looking to explore the wilderness of Meghalaya.",
      link: "/nokrek",
    },
  ];

  return (
    <div className="layout-container">
      <Navbar />
      <br />
      <br />
      <br />
      <div className="dashboard-banner">
        <h1 className="dashboard-title">Meghalaya</h1>
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

export default Meghalaya;
