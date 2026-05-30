import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Layout.css";
import "../styles/about_us.css";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout-container">
      <Navbar />
      <div className="about-banner">
        <h1 className="dashboard-title">About Us</h1>
      </div>
      <br />
      <br />

      <section className="mission">
        <h3>Our Mission</h3>
        <p>
        The motive of the NGO is to moderate the young thinking for a happy and developed world. The youth become responsible and understand their own need for the society and country is the heart value of the mission
        </p>
      </section>
<br />
<br />
      <section className="offer">
        <h3>What we offer?</h3>
        <ul>
          <li>
          <span className="title">Trekking for All:</span> Our range of trails suits everyone, whether you’re just starting out or have years of hiking experience.
          </li>
          <li>
          <span className="title">Tailored Trekking Plans: </span> We design unique trekking routes and itineraries based on your preferences and requirements.
          </li>
          <li>
          <span className="title">Solo and Group Experiences:</span> Whether you prefer exploring alone or with others, we provide options that cater to individual explorers and larger groups.
          </li>
          <li>
          <span className="title">Preparation and Support:</span> We offer guidance and preparation tips to ensure you're ready for the adventure ahead, from gear suggestions to physical conditioning.
          </li>
        </ul>
      </section>
      <br />

      <br />

      <section className="choose">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>
          <span className="title">Knowledgeable Team:</span> Our experienced team ensures you receive the best guidance and insights during your adventure.
          </li>
          <li>
          <span className="title">Dedicated Support:</span> From planning to completion, our team is available to provide full support, ensuring a smooth and enjoyable trekking experience.
          </li>
          <li>
          <span className="title">Eco-Friendly Approach:</span> We are committed to preserving nature by following environmentally responsible practices throughout our journeys.
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default About;
