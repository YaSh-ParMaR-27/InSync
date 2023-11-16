import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logoImg from "../assets/CircleLogo-removebg-preview.png";
import { FaDownload } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar_container">
      <div className="left_part">
        <div className="logo-container">
          <img src={logoImg} alt="Logo" className="logo" />
        </div>

        <div className="nav-links">
          <ScrollLink
            smooth
            to="how-it-works"
            duration={500}
            className="nav-link"
          >
            How does it work?
          </ScrollLink>
          <ScrollLink
            to="information"
            smooth
            duration={500}
            className="nav-link supportedfile"
          >
            Supported Files
          </ScrollLink>
          <RouterLink to="/signup" className="nav-link">
            Create my Account
          </RouterLink>
        </div>
      </div>

      <div className="nav-icons">
        <RouterLink to="/login" className="icons_links signin">
          <IoPerson /> 
          <span>Sign in</span>
        </RouterLink>
        <a href="/path/to/download/sample.xlsx" download className="icons_links download">
          <FaDownload size={20} />
          <span>Download Sample File</span>
        </a>
      </div>
    </nav>
  );
}
