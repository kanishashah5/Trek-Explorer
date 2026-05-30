import React from 'react';
import '../styles/FeaturedTreks.css'; // Import the corresponding CSS

const featuredTreks = [
  {
    id: 1,
    name: 'Everest Base Camp',
    location: 'Nepal',
    difficulty: 'Hard',
    image: require('../assets/hero.jpg'), // Replace with actual image paths
  },
  {
    id: 2,
    name: 'Inca Trail',
    location: 'Peru',
    difficulty: 'Moderate',
    image: require('../assets/hampta.jpg'),
  },
  {
    id: 3,
    name: 'Mount Kilimanjaro',
    location: 'Tanzania',
    difficulty: 'Hard',
    image: require('../assets/hampta4.jpg'),
  },
  {
    id: 4,
    name: 'Annapurna Circuit',
    location: 'Nepal',
    difficulty: 'Moderate',
    image: require('../assets/hampta2.jpg'),
  },
];

const FeaturedTreks = () => {
  return (
    <section className="featured-treks">
      <h2 className="section-title">Featured Treks</h2>
      <div className="treks-grid">
        {featuredTreks.map((trek) => (
          <div key={trek.id} className="trek-card">
            <img src={trek.image} alt={trek.name} className="trek-image" />
            <div className="trek-details">
              <h3 className="trek-name">{trek.name}</h3>
              <p className="trek-location">{trek.location}</p>
              <p className="trek-difficulty">{trek.difficulty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTreks;
