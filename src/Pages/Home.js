import React from "react";
import Navbar from "../components/navbar/Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div
        style={{
          color: "#D0D6F9",
          textAlign: "center",
          padding: "0 10px",
          marginTop: "2rem",
        }}
      >
        <p
          style={{
            letterSpacing: "2.7px",
            fontFamily: "Barlow Condensed",
            marginBottom: "10px",
          }}
        >
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1
          style={{
            fontSize: "80px",
            lineHeight: "100px",
            color: "#FFFFFF",
            fontWeight: "normal",
            fontFamily: "bellefair",
          }}
        >
          SPACE
        </h1>
        <p
          style={{
            fontFamily: "Barlow",
            lineHeight: "25px",
          }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <NavLink to={"/destination"} className="mobile-explore-btn">
          EXPLORE
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
