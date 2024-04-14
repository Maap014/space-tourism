import Navbar from "../components/navbar/Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="mobile-bg-home">
        <Navbar />
        <div className="home-wrapper">
          <div className="hero-section">
            <p className="page-heading">SO, YOU WANT TO TRAVEL TO</p>
            <h1 className="home-title">SPACE</h1>

            <p className="home-page-paragraph">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div>
            <NavLink to={"/destination"} className="mobile-explore-btn">
              EXPLORE
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
