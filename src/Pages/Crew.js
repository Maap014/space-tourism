import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import { useFetchData } from "./useFetchData";

const Crew = () => {
  const [slide, setSlide] = useState(0);
  const { planetData: CrewData } = useFetchData("/data.json");
  return (
    <div className="wrapper">
      <div className="crew-bg">
        <Navbar />

        <div>
          <p className="page-heading">
            <span className="page-heading-id">02</span>
            MEET YOUR CREW
          </p>
          <Carousel slide={slide} />
          <div className="demaction-line" style={{ margin: "0px" }}></div>
          <div className="crew-info">
            <span className="indicators">
              {CrewData?.crew?.map((_, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => setSlide(idx)}
                    className={
                      slide === idx
                        ? "indicator"
                        : "indicator indicator-inactive"
                    }
                  ></button>
                );
              })}
            </span>
            <div>
              <h3 className="crew-role">
                {CrewData?.crew[slide].role.toLocaleUpperCase()}
              </h3>
              <h1 className="crew-name">
                {CrewData?.crew[slide].name.toLocaleUpperCase()}
              </h1>
              <>
                <p className="crew-bio">{CrewData?.crew[slide].bio}</p>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
