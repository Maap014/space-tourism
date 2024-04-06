import React, { useEffect, useState } from "react";
import "./NavbarStyles.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openHambuger, setHamburger] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("home")) {
      setActive("home");
    } else if (location.pathname.includes("destination")) {
      setActive("destination");
    } else if (location.pathname.includes("crew")) {
      setActive("crew");
    } else if (location.pathname.includes("technology")) {
      setActive("technology");
    }
  }, []);

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
            <NavLink
              to={"/"}
              className={"nav-link"}
              style={{
                borderBottom: active === "home" ? "2px solid #fff" : "",
              }}
            >
              <span>01</span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/destination"}
              className={"nav-link"}
              style={{
                borderBottom: active === "destination" ? "2px solid #fff" : "",
              }}
            >
              <span>02</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/crew"}
              className={"nav-link"}
              style={{
                borderBottom: active === "crew" ? "2px solid #fff" : "",
              }}
            >
              <span>03</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/technology"}
              className={"nav-link"}
              style={{
                borderBottom: active === "technology" ? "2px solid #fff" : "",
              }}
            >
              <span>04</span>Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
