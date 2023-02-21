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
            Create
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav--link">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
