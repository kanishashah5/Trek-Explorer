import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/BookNow.css";
import { useNavigate } from "react-router-dom";

const states = [
  "Himachal-pradesh",
  "Goa",
  "Kerela",
  "Ladakh",
  "Maharashtra",
  "Meghalaya",
];

const treksByState = {
  "Himachal-pradesh": [
    { name: "Hampta Pass Trek", price: "10000" },
    { name: "Dalhousie Trek", price: "9000" },
  ],
  Goa: [
    { name: "Dudhsagar Falls Trek", price: "10000" },
    { name: "Tambdi Surla Trek", price: "9000" },
  ],
  Kerela: [
    { name: "Agasthyakoodam Trek", price: "10000" },
    { name: "Chembra Peak Trek", price: "9000" },
  ],
  Ladakh: [
    { name: "Chadar Trek", price: "10000" },
    { name: "Stok Kangri Trek", price: "9000" },
  ],
  Maharashtra: [
    { name: "Mahabaleshwar", price: "10000" },
    { name: "Matheran Trek", price: "9000" },
  ],
  Meghalaya: [
    { name: "Living Root Bridges Trek", price: "10000" },
    { name: "Nokrek Peak Trek", price: "9000" },
  ],
};

function BookNow() {
  const navigate = useNavigate();
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

  const [selectedState, setSelectedState] = useState("");
  const [availableTreks, setAvailableTreks] = useState([]);
  const [selectedTrek, setSelectedTrek] = useState("");
  const [selectedTrekPrice, setSelectedTrekPrice] = useState("");
  const [trekDate, setTrekDate] = useState("");
  const [emergencyContact, setEmergencyContact] = useState({
    name: "",
    phone: "",
  });
  const [accommodation, setAccommodation] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [liabilityWaiver, setLiabilityWaiver] = useState(false);
  const [numberOfPersons, setNumberOfPersons] = useState(1); // New state for number of persons
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    if (selectedTrekPrice && numberOfPersons) {
      setTotalPrice((parseFloat(selectedTrekPrice) * numberOfPersons).toFixed(2)); // Calculate total price
    } else {
      setTotalPrice(0); // Reset total price if any value is missing
    }
  }, [selectedTrekPrice, numberOfPersons]);

  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);

  useEffect(() => {
    if (selectedState) {
      setAvailableTreks(treksByState[selectedState]);
      setSelectedTrek("");
      setSelectedTrekPrice("");
    } else {
      setAvailableTreks([]);
    }
  }, [selectedState]);

  const handleTrekChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedTrek(selectedOption);
    const trek = availableTreks.find((trek) => trek.name === selectedOption);
    setSelectedTrekPrice(trek ? trek.price : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the data object to send to the backend
    const bookingData = {
      state: selectedState,
      trek: selectedTrek,
      price: totalPrice,  // Keep this as price 
      number_of_persons: numberOfPersons, // New field for number of persons
      trek_date: trekDate,
      emergency_contact_name: emergencyContact.name,
      emergency_contact_phone: emergencyContact.phone,
      accommodation,
      special_requests: specialRequests,
      payment_method: paymentMethod,
      liability_waiver: liabilityWaiver,
      user_id: getCookie("userId"),
    };

    try {
      const response = await axios.post("http://localhost:8000/bookings/", bookingData);
      alert("Booking created successfully!");
      navigate("/bookings");
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("There was an error creating your booking. Please try again.");
    }
  };


  return (
    <>
      <Navbar />
      <div className="booking-page-container">
        <div className="booking-left-section"></div>
        <div className="booking-middle-section">
          <div className="booking-container">
            <h1 style={{ color: "#63ab45" }}>Book Your Trek Adventure</h1>
            <p>
              Fill out the form below to book your next trekking adventure.
              Please provide all the necessary details to ensure a smooth
              experience.
            </p>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="booking-form-group">
                <label htmlFor="state">Select State:</label>
                <select
                  id="state"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-form-group">
                <label htmlFor="trek">Select Trek:</label>
                <select
                  id="trek"
                  value={selectedTrek}
                  onChange={handleTrekChange}
                  disabled={!selectedState}
                >
                  <option value="">Select a trek</option>
                  {availableTreks.map((trek) => (
                    <option key={trek.name} value={trek.name}>
                      {trek.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-form-group">
            <label htmlFor="numberOfPersons">Number of Persons:</label>
            <input
              type="number"
              id="numberOfPersons"
              value={numberOfPersons}
              min="1"
              onChange={(e) => setNumberOfPersons(e.target.value)}
            />
          </div>

              {selectedTrekPrice && (
                <div className="booking-trek-price">
                  <p>Price: ₹{totalPrice}</p>
                </div>
              )}

              <div className="booking-form-group">
                <label htmlFor="trekDate">Preferred Trek Date(s):</label>
                <input
                  type="date"
                  id="trekDate"
                  value={trekDate}
                  onChange={(e) => setTrekDate(e.target.value)}
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="emergencyName">Emergency Contact Name:</label>
                <input
                  type="text"
                  id="emergencyName"
                  value={emergencyContact.name}
                  onChange={(e) =>
                    setEmergencyContact({
                      ...emergencyContact,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="emergencyPhone">Emergency Contact Phone:</label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  value={emergencyContact.phone}
                  onChange={(e) =>
                    setEmergencyContact({
                      ...emergencyContact,
                      phone: e.target.value,
                    })
                  }
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="accommodation">
                  Accommodation Preferences:
                </label>
                <input
                  type="text"
                  id="accommodation"
                  value={accommodation}
                  onChange={(e) => setAccommodation(e.target.value)}
                />
              </div>

              

              <div className="booking-form-group">
                <label htmlFor="specialRequests">Special Requests:</label>
                <textarea
                  id="specialRequests"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                />
              </div>

              <div className="booking-form-group">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Online">Online</option>
                  <option value="Cash">Cash</option>
                </select>
              </div>

              <div className="booking-form-group booking-liability-checkbox">
                <label
                  htmlFor="liabilityWaiver"
                  className="booking-liability-label"
                >
                  I agree to trek at my own risk.
                </label>
                <input
                  type="checkbox"
                  id="liabilityWaiver"
                  checked={liabilityWaiver}
                  onChange={(e) => setLiabilityWaiver(e.target.checked)}
                />
              </div>

              <button type="submit" className="booking-button">
                Book Now
              </button>
            </form>
          </div>
        </div>
        <div className="booking-right-section"></div>
      </div>
      <Footer />
    </>
  );
}

export default BookNow;
