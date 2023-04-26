import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./style.css";

const Register = () => {
  const [inputs, setInputs] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <h1>Create Your Account</h1>
      <form>
        <input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <input required type="email" placeholder="email" name="email" onChange={handleChange} />
        <input required type="password" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Sign Up!</button>
        <p className="err">Error message</p>
        <p>
          Do you have an account? <Link to="/login">Login!</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
