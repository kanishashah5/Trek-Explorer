import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Layout.css";
import "../styles/Contact.css";
import React from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  return (
    <div className="layout-container">
      <Navbar />
      <div className="contact-banner">
        <h1 className="dashboard-title">Contact Us</h1>
      </div>

      <div className="address-sections">
        <div className="address-section">
          <div className="address-content">
            <div className="address-info">
              <h2 >Ahmedabad (Head Office)</h2>
              <p>
              3rd Floor, Green Valley Complex,
Near Prahlad Nagar Garden,
SG Highway, Ahmedabad - 380015
              </p>
              <br />

              <p>Office Timings: 11AM to 8PM</p>
              <br />

              <p>Phone: 9876543211
              </p>
              <br />

              <p>Email: ahmedabad_trekexplorer@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="address-section">
          <div className="address-content">
            <div className="address-info">
              <h2>Vadodara</h2>
              <p>
              2nd Floor, Royal Arcade,
Opposite Laxmi Vilas Palace,
Rajmahal Road, Vadodara - 390001
              </p>
              <br />

              <p>Office Timings: 11AM to 8PM</p>
              <br />
              <p>Phone num :- 7999125546</p>
              <br />

              <p>Email: vadodara_trekexplorer@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="address-section">
          <div className="address-content">
            <div className="address-info">
              <h2>New Delhi</h2>
              <p>101, Mountain View Tower,
Connaught Place,
New Delhi - 110001</p>
<br />
              <p>Office Timings: 11AM to 8PM</p>
              <br />

              <p>Phone num :- 8756179999</p>
              <br />

              <p>Email: delhi_trekexplorer@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="address-section">
          <div className="address-content">
            <div className="address-info">
              <h2>Gandhinagar</h2>
              <p>
              5th Avenue Building,
Next to Viman Nagar Square,
Pune - 411014
              </p>
              <br />

              <p>Office Timings: 11AM to 8PM</p>
              <br />
              <p>Phone num :- 8671139819</p>
              <br />

              <p>Email: gandhinagar_trekexplorer@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default Contact;
