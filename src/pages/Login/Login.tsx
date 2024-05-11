import './login.scss';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  return (
    <div className="login">
      <div className="login-text">
        <span className="login-text">Hello from Login</span>
      </div>
      <div className="form">
        <form action="login">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
