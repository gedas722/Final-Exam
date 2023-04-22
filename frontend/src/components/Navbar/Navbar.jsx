import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/forum.svg";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <button>
            <Link className="nav-link" to="/login">
              Login!
            </Link>
          </button>
          <button>
            <Link className="nav-link" to="/register">
              Sign Up!
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
