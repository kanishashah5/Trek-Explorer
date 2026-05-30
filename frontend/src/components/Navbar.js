import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    const location = useLocation();

    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; secure; SameSite=Lax`;
    }

    const handleSignOut = () => {
        deleteCookie("userId");
        setLoggedIn(false);
        navigate("/"); // Redirect to home or login page
    };

    useEffect(() => {
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

        const fetchData = async () => {
            const userId = getCookie('userId');
            if (userId) {
                setLoggedIn(userId);
            }
        };
        fetchData();
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && !isFixed) {
                setIsFixed(true); // Fix navbar when scrolling down
            } else if (window.scrollY === 0 && isFixed) {
                setIsFixed(false); // Unfix navbar when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isFixed]);

    return (
        <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
            <div className="navbar-logo">
                <span onClick={() => navigate('/home')}>TrekExplorer</span>
            </div>
            <ul className="navbar-links">
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/activity")}>Activities</li>
                <li onClick={() => navigate("/dashboard")}>Dashboard</li>
                <li onClick={() => navigate("/contact")}>Contact</li>
                <li onClick={() => navigate("/about")}>About</li>
            </ul>
            <div className="navbar-buttons">
                {!loggedIn ? (
                    <>
                        <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
                        <button className="signup-btn" onClick={() => navigate("/register")}>Sign Up</button>
                    </>
                ) : (
                    <button className="logout-btn" onClick={handleSignOut}>Logout</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
