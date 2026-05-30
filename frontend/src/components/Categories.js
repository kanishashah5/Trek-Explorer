import React from 'react';
import '../styles/Categories.css'; // Import the corresponding CSS

const categories = [
  {
    id: 1,
    name: 'Mountain Treks',
    image: require('../assets/hampta2.jpg'), // Replace with actual image paths
  },
  {
    id: 2,
    name: 'Forest Trails',
    image: require('../assets/img7.jpg'),
  },
  {
    id: 3,
    name: 'Desert Safaris',
    image: require('../assets/desertsafari.avif'),
  },
  {
    id: 4,
    name: 'Water Adventures',
    image: require('../assets/wateradv.jpg'),
  },
];

const AdventureCategories = () => {
  return (
    <section className="adventure-categories">
      <h2 className="section-title">Adventure Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdventureCategories;
