import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmail (e) {
    setEmail(e.target.value);
  }
  function handlePassword (e) {
    setPassword(e.target.value);
  }
  return (
    <div className="ui-main">
      <h2>Login Here</h2>
      <form className="ui-form">
        <div className="Email">
          <label className="nameBox">Email</label>
          <input
            onChange={handleEmail}
            value={email}
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="Password">
          <label className="nameBox">Password</label>
          <input
            onChange={handlePassword}
            value={password}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="signUp">
          <button className="submit" type="submit">
            Login
          </button>
          <p>Don't have an account?</p>
          <a href="#">
            <p>Sign-Up</p>
          </a>
        </div>
      </form>
      <p>Your Email is: {email}</p>
      <p>Your Password is: {password}</p>
    </div>
  );
}

export default Login;
