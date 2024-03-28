import React, { useState } from "react";
import "./NavbarStyles.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openHambuger, setHamburger] = useState(false);
  return (
    <nav>
      <img src="../../assets/shared/logo.svg" alt="" />
      <div>
        <div
          id="hamburger"
          onClick={() => setHamburger(!openHambuger)}
          style={{ cursor: "pointer" }}
        >
          {openHambuger ? (
            <img
              src="../../assets/shared/icon-close.svg"
              alt="hamburger-close"
            />
          ) : (
            <img
              src="../../assets/shared/icon-hamburger.svg"
              alt="hamburger-open"
            />
          )}
        </div>
        <ul
          className={openHambuger ? "open" : "close"}
          style={{ fontFamily: "Barlow Condensed", letterSpacing: "2.7px" }}
        >
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/destination"}>Destination</NavLink>
          </li>
          <li>
            <NavLink to={"/crew"}>Crew</NavLink>
          </li>
          <li>
            <NavLink to={"/technology"}>Technology</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
