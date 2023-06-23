// const { BrowserRouter, NavLink, Route, Switch } = ReactRouterDOM;

import { useState } from "react";

import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <img src="Logo.png" alt="nav-logo" />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src="menu.png" alt="menu-logo" />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/Home" onClick={handleShowNavbar}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/search" onClick={handleShowNavbar}>
                  search
                </NavLink>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
