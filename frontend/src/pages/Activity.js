import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Layout.css";
import "../styles/Activity.css";
import bungee from "../assets/bungee.jpg";
import rafting from "../assets/rafting.jpg";
import paragliding from "../assets/parag.jpg";
import safari from "../assets/safari.jpg";
import bike from "../assets/roadtripp.jpg";
function Activity() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  return (
    <div className="layout-container">
      <Navbar />
      <div className="activity-banner">
        <h1 className="dashboard-title">Activities</h1>
      </div>
      <br/> 
      
      <div className="activity-section">
        <div className="activity-image">
          <img src={rafting} alt="River Rafting" />
        </div>
        <div className="activity-info">
          <h3>River Rafting at Manali</h3>
          <p>
          Dive into the adventure of a lifetime with river rafting in Manali! Feel the adrenaline surge as you conquer the thrilling rapids of the Beas River, surrounded by the breathtaking beauty of the Himalayas. From gentle splashes to heart-pounding thrills, this experience promises both excitement and stunning views of lush valleys and snow-capped peaks.
          </p>
          <p> Timings :- 11:00 am to 5:00 pm </p>
          <p>Contact number :- +91 8963433451</p>
        </div>
        <div className="activity-map">
          <iframe
            title="Google Map for River Rafting"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.425553192456!2d77.17113701510849!3d32.23057088194144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390969ddaa2d8b59%3A0xd58c7cf93524c8d8!2sBeas%20River%2C%20Manali%2C%20Himachal%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1669281886703!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

     
      <div className="activity-section">
        <div className="activity-image">
          <img src={paragliding} alt="Paragliding" />
        </div>
        <div className="activity-info">
          <h3>Paragliding at Manali</h3>
          <p>
            Paragliding in Manali offers an exhilarating flight experience with
            breathtaking views of the Himalayas and the Kullu Valley. It’s a
            popular adventure sport that lets you soar high above the
            picturesque landscape.
          </p>
          <p>
            Participants enjoy a thrilling glide with panoramic views of
            snow-capped peaks, lush forests, and the serene Beas River below.
            Tandem flights with experienced instructors ensure a safe and
            memorable experience.
          </p>
          <p> Timings :- 8:00 am to 6:00 pm </p>
          <p>Contact number :- +91 9253563472</p>
        </div>
        <div className="activity-map">
          <iframe
            title="Google Map for Paragliding"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.185558867529!2d77.18835721510849!3d32.23957558195251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39096fd7244f5ebd%3A0x3df89778a220bce1!2sManali%2C%20Himachal%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1669282042256!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="activity-section">
        <div className="activity-image">
          <img src={bike} alt="ladakh bike trip" />
        </div>
        <div className="activity-info">
          <h3>Road trip by bike at Ladakh</h3>
          <p>
          Set off on the ride of a lifetime with a bike expedition to Ladakh! This iconic adventure, celebrated as the ultimate journey for thrill-seekers, takes you through the "Land of High Passes." Experience the dramatic landscapes, towering peaks, and tranquil monasteries that make Ladakh a biker’s dream. Starting from Manali or Srinagar, prepare to tackle some of the most awe-inspiring and challenging routes on earth. This isn't just a ride; it's an unforgettable quest that will push your limits and ignite your sense of adventure.
          </p>
          <p>Timings :- Flexible</p>
          <p>Contact number :- +91 8711989567</p>
        </div>
        <div className="activity-map">
          <iframe
            title="Google Map for Ladakh Bike Trip"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.3246705945533!2d77.58249751620666!3d34.1521991191526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdeb96e0b6b5eb%3A0x96f99dbe6c6b312a!2sLeh%20Ladakh%2C%20Jammu%20and%20Kashmir%20194101!5e0!3m2!1sen!2sin!4v1669281884812!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="activity-section">
        <div className="activity-image">
          <img src={bungee} alt="Bungee Jumping" />
        </div>
        <div className="activity-info">
          <h3>Bungee Jumping at Rishikesh</h3>
          <p>
          Take your adventure to new heights in Rishikesh with an exhilarating bungee jump! Plunge from a platform perched 83 meters above the ground, offering sweeping views of the serene Shivalik hills and the majestic Ganges River. With expert guides ensuring your safety, this heart-pounding experience promises thrills and memories to last a lifetime.Feel the rush of free-fall and embrace the ultimate adrenaline high as you soar through the air. This is more than a jump; it’s an unforgettable moment of pure excitement and awe.
          </p>
          <p> Timings :- 10:00 am to 2:00 pm </p>
          <p>Contact number :- +91 9922668118</p>
        </div>
        <div className="activity-map">
          <iframe
            title="Google Map for Bungee Jumping"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.8256937960576!2d78.26909731510848!3d30.08522008196522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c01f0055e155b%3A0xb91f23ccf58fdce2!2sMohan%20Chatti%2C%20Rishikesh%2C%20Uttarakhand%20494014!5e0!3m2!1sen!2sin!4v1669281820843!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="activity-section">
        <div className="activity-image">
          <img src={safari} alt="Jungle Safari" />
        </div>
        <div className="activity-info">
          <h3>Jungle Safari at Gir Forest</h3>
          <p>
          mmerse yourself in the wilderness with a jungle safari, where the excitement of encountering wildlife blends seamlessly with the beauty of nature. Traverse through lush, green forests and dense jungles on guided excursions, with opportunities to see majestic creatures like tigers, elephants, and leopards, as well as a rich variety of bird species. This adventure not only offers an up-close look at nature's wonders but also supports crucial conservation efforts, making it a perfect experience for wildlife enthusiasts.






.
          </p>
          <p> Timings :- 6:00 am to 4:00 pm </p>
          <p>Contact number :- +91 9856347612</p>
        </div>
        <div className="activity-map">
          <iframe
            title="Google Map for Jungle Safari"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.791295214522!2d70.3518123!3d21.1455517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be00f80e31f63af%3A0x96a0ef69115fc1c0!2sGir%20Forest%20National%20Park!5e0!3m2!1sen!2sin!4v1669281973676!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Activity;
