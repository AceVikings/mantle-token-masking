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
        <li>
          <div className="wallet-button" onClick={connectWallet}>
            {address ? address : "Connect Wallet"}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
