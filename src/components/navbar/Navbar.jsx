import React, { useEffect, useState } from "react";
import "./NavbarStyles.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openHamburger, setHamburger] = useState(false);
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
      <img
        src="../../assets/shared/logo.svg"
        alt="Space tourism logo"
        className="logo"
      />
      <div>
        <div
          id="hamburger"
          onClick={() => setHamburger(!openHamburger)}
          style={{ cursor: "pointer" }}
        >
          {openHamburger ? (
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
          className={`${openHamburger ? "open" : "close"} nav-page`}
          // style={{ fontFamily: "Barlow Condensed", letterSpacing: "2.7px" }}
        >
          <li>
            <NavLink
              to={"/"}
              className={"nav-link"}
              style={{
                borderBottom: active === "home" ? "2px solid #fff" : "",
              }}
            >
              <span className="nav-page-code">00</span>
              HOME
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
              <span className="nav-page-code">01</span>DESTINATION
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
              <span className="nav-page-code">02</span>CREW
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
              <span className="nav-page-code">03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
