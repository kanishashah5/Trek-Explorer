import React from 'react';
import Slider from 'react-slick';
import '../styles/Testimonials.css'; 

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    location: 'Nepal',
    text: 'The Everest Base Camp trek was an unforgettable experience. The views were breathtaking and the support from the guides was exceptional.',
    image: require('../assets/avatar4.jpeg'), // Replace with actual image paths
  },
  {
    id: 2,
    name: 'John Smith',
    location: 'Peru',
    text: 'Inca Trail was a life-changing journey. The cultural immersion and the hike through ancient ruins were simply amazing.',
    image: require('../assets/avatar2.jpeg'),
  },
  {
    id: 3,
    name: 'Alice Johnson',
    location: 'Tanzania',
    text: 'Climbing Kilimanjaro was challenging but rewarding. The sense of achievement upon reaching the summit was incredible.',
    image: require('../assets/avatar1.jpeg'),
  },
  {
    id: 4,
    name: 'Michael Brown',
    location: 'Nepal',
    text: 'The Annapurna Circuit offered diverse landscapes and rich local culture. It’s a trek that should be on everyone’s bucket list.',
    image: require('../assets/avatar3.jpeg'),
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Trekkers Say</h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-text">
              <p>"{testimonial.text}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
