import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoCard1 from '../components/InformationCard1';
import Categories from '../components/Categories';
import Weekend from '../components/Weekend';
import InfoCard2 from '../components/InformationCard2';
import Trekking from '../components/Trekking';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <br />
      <br />
      <InfoCard1 />
      <Categories />
      <Weekend />
      <InfoCard2 />
      <br />
      <Trekking />
       <Testimonials /> 
      <Footer />
    </div>
  );
};

export default Home;
