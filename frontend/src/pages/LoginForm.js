import React, { useState } from "react";
import "../styles/loginform1.css";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginForm() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login/', { // Replace with your actual backend endpoint
        email,
        password,
      });
      if (response.data.success) {
        console.log("Login successful:", response.data);
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        var userId = response.data['user_id']
        document.cookie = `userId=${userId}; expires=${expiryDate.toUTCString()}; path=/; secure; SameSite=Lax`;
        navigate("/");
      }
      else{
        alert("Sign in failed : "+response.data.message)
      }
      // Handle successful login here
    } catch (error) {
      // Handle errors here
      console.error("Login failed:", error.response.data);
      alert("Login failed: " + error.response.data.message); // Show error message to the user
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Welcome to TrekExplorer</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleUsernameChange}
              required
            />
            <CgProfile className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <RiLockPasswordLine className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a onClick={() => navigate("/forgot")}>Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account?</p>
            <a className="register-link" onClick={() => navigate("/register")}>Sign up?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
