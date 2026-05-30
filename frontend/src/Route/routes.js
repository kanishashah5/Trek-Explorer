import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home.js'
import LoginForm from "../pages/LoginForm.js";
import Contact from "../pages/Contact.js";
import About from "../pages/About.js";
import RegisterForm from "../pages/RegisterForm.js";
import Activity from "../pages/Activity.js";
import Dashboard from "../pages/Dashboard.js";
import Himachal from "../components/treks/himachal";
import Maharashtra from "../components/treks/Maharashtra";
import Hampta from "../components/treks/Hamta";
import Saputara from "../components/treks/Saputara";
import UpdateProfile from "../components/updated_profile";
import Goa from "../components/treks/Goa";
import Ladakh from "../components/treks/Ladakh";
import Kerala from "../components/treks/Kerala";
import Meghalaya from "../components/treks/Meghalaya";
import NotFound from "../pages/NotFound";
import Book from "../components/book";
import Booking from "../pages/bookings.js";
import Wishlist from "../pages/Wishlist.js";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/himachal" element={<Himachal />} />
      <Route path="/ladakh" element={<Ladakh />} />
      <Route path="/trek/hampta" element={<Hampta/>}/>
      <Route path="/trek/saputara" element={<Saputara/>}/>
      <Route path="/goa" element={<Goa/>}/>
      <Route path="/kerala" element={<Kerala/>}/>
      <Route path="/Meghalaya" element={<Meghalaya/>}/>
      <Route path="/mh" element={<Maharashtra />} />
      <Route path="/update_profile" element={<UpdateProfile />} /> {/* Add the route here */}
      <Route path='/book_trek' element={<Book/>}/>
      <Route path='/bookings' element={<Booking/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>

    </Routes>
  );
}
export default AppRoutes;
