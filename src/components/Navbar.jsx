import React, { useState } from "react";
import abc from "../assets/Images/other/logo3.webp";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo size">
          <img src={abc} alt="Logo" height="80px" />
        </div>

        {/* Toggle Button */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "nav active" : "nav"}>
  <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    About
  </NavLink>

  <NavLink
    to="/course"
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Course
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Contactus
  </NavLink>
</nav>
      </header>
    </>
  );
}

export default Navbar;