import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav--home">
        <img className="nav--logo" src={logo} />
        <h1>EzMask</h1>
      </Link>

      <ul>
        <li>
          <Link to="/mask" className="nav--link">
            Mask URI
          </Link>
        </li>
        <li>
          <Link to="/mymask" className="nav--link">
            My Masks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
