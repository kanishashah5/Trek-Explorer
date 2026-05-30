import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Hero.css'; // Import the corresponding CSS
import { AiOutlineSearch } from 'react-icons/ai';
import image from '../assets/img12.jpg';

const HeroSection = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

      const handleSearchSubmit = (e) => {
        e.preventDefault();
        const formattedQuery = searchQuery.toLowerCase();
        
        // Map search queries to routes
        const routes = {
          goa: "/goa",
          hampta: 'trek/hampta',
          himachal :'/himachal',
          kerala:'/kerala',
          ladakh:'/ladakh',
          maharashtra:'/mh',
          meghalaya:'/meghalaya'
        };
    
        if (routes[formattedQuery]) {
          navigate(routes[formattedQuery]);
        } else {
          alert("No items match your search.");
        }
    
        setSearchQuery(""); // Clear search input after submission
      };
  return (
    <div className="hero-container">
      <div className="overlay">
        <h1>Plan Your Next Adventure with TrekExplorer</h1>
        <p>Discover the most thrilling trekking spots across India!</p>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <div className="search-bar">
          <input type="text" placeholder="Search Treks....." value={searchQuery}
            onChange={handleSearchChange}/>
          <button>Search</button>
        </div>
          </form>
      </div>
    </div>
  );
};

export default HeroSection;
