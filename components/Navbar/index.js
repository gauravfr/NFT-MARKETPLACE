import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css"; // For the profile logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="leftSection">
        <FaUserCircle size={50} className="profileLogo" />
      </div>
      <div className="rightSection">
        <button className="connectWalletButton">Connect Wallet</button>
        <span className="brandName">ETHER EASE</span>
      </div>
    </nav>
  );
};

export default Navbar;
