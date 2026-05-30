import React, { useEffect, useState } from "react";
import "../styles/loginform1.css";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      full_name: fullName,
      username: username,
      phone_number: contactNumber,
      email: gmail,
      password: password,
      confirm_password: confirmPassword,
    };

    // try {
    const response = await axios.post(
      "http://localhost:8000/signup/",
      userData
    );
    if (response.data.success) {
      // Store the email in localStorage
      var userId = response.data['user_id']
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);

      document.cookie = `userId=${userId}; expires=${expiryDate.toUTCString()}; path=/; secure; SameSite=Lax`;
      alert(response.data.message);

      // navigate("/verify");
      navigate('/')
    } else {
      alert("Sign up failed: " + response.data.message);
    }
    // } catch (error) {
    //   console.error("There was an error registering the user!", error);
    //   alert("There was an error during sign up!");
    // }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign up at GoTrek</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <CgProfile className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <CgProfile className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
            <AiOutlinePhone className="icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Gmail"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              required
            />
            <AiOutlineMail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <RiLockPasswordLine className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <RiLockPasswordLine className="icon" />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
