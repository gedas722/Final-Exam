import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Login in to continue</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login in</button>
        <p>
          Don't have an account yet? <Link to="/register">Sign Up!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
