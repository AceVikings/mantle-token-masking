import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { connectWallet, address } = props;
  return (
    <div className="navbar">
      <Link to="/" className="nav--home">
        <img className="nav--logo" src={logo} />
        <h1>
          Ez<span className="color-primary">Mask</span>
        </h1>
      </Link>

      <div className="nav-options">
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
      <div className="wallet-button" onClick={connectWallet}>
        {address ? address : "Connect Wallet"}
      </div>
    </div>
  );
};

export default Navbar;
