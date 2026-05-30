import React from "react";
import "../styles/InfoCard2.css";
import {
  FaRoute,
  FaBinoculars,
  FaGlobeAmericas,
  FaMountain,
} from "react-icons/fa";

function Info2() {
  return (
    <div className="info2-container">
      <h1 style={{ textAlign: "center", color: "#63ab45" }}>
        Unforgettable Trekking Adventures
      </h1>
      <p className="info2-p">
        Discover some of the most thrilling and breathtaking trekking adventures
        in India. These treks offer not only a physical challenge but also an
        opportunity to experience the incredible beauty of the Himalayas.
      </p>

      <div className="info2-sections">
      <div className="info2-section">
          <FaGlobeAmericas className="info2-icon" />
          <h2>Kasol-Sar Pass, Himachal Pradesh</h2>
          <p>
            
            The Kasol-Sar Pass trek is an exciting journey starting from the charming village of Kasol. It guides you through verdant forests and expansive meadows, culminating at Sar Pass, where you are rewarded with stunning vistas of the nearby mountains. Ideal for those looking for a rewarding and visually captivating adventure.
          </p>
        </div>
        
        <div className="info2-section">
          <FaBinoculars className="info2-icon" />
          <h2>Kheerganga Trek, Himachal Pradesh</h2>
          <p>
          Kheerganga Trek is a scenic trail located in the Parvati Valley of Himachal Pradesh. Known for its lush green meadows, dense forests, and panoramic mountain views, where trekkers can relax in natural hot springs. The route offers a mix of enchanting waterfalls and serene landscapes, making it popular. 
          </p>
        </div>
        
        <div className="info2-section">
          <FaRoute className="info2-icon" />
          <h2>Hamta Pass, Himachal Pradesh</h2>
          <p>
          Hampta Pass is a popular trekking route located in Himachal Pradesh, offering adventurers a stunning contrast in terrains. Starting from the fertile, forested valleys, the trail takes you through verdant pastures and ultimately leads to the stark, desert-like landscapes of Lahaul. 
          </p>
        </div>

        <div className="info2-section">
          <FaMountain className="info2-icon" />
          <h2>Bhrigu Lake, Himachal Pradesh</h2>
          <p>
          Bhrigu Lake, situated at high altitude close to Manali, is renowned for its stunning trek. The journey offers a visual treat with verdant meadows that evoke the charm of alpine landscapes. The lake holds a significant place in local lore, said to be a revered spot where the sage Bhrigu meditated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info2;
