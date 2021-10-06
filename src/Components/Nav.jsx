import React from "react";
import "./Nav.css";
import cart from "../Assets/images/kitenge/cart.jpg";
import "./girldress.css";
import appstore from "../Assets/images/kitenge/appstore.png";
import googleplay from "../Assets/images/kitenge/googleplay.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div className="cartArea">
        {" "}
        <h5>Our Apps available at</h5>
      
          <img className="appstore" src={appstore} alt="appstore" />
    
          <img className="googleplay" src={googleplay} alt="googleplay" />
    
      
          <img className="cart" src={cart} alt="cart" />
      
      </div>
      <div className="top">
        <div className="logo">
          <h1>BBB</h1>
        </div>
        <div className="Menu-items">
          <ul>
            <Link to="/">
              <li>
                <a href="home">Home</a>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <a href="login">Login</a>
              </li>
            </Link>
            <Link to="/shop">
              <li>
                <a href="shop">Shop</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      </div>
      
  );
}

export default Nav;
