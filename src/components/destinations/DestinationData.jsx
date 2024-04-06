import React from "react";

const DestinationData = ({ planetData }) => {
  return (
    <>
      <div>
        <h1 className="active-dest-name">
          {planetData.name.toLocaleUpperCase()}
        </h1>
      </div>
      <div>
        <p style={{ lineHeight: "25px" }}>{planetData.description}</p>
      </div>
      <div className="demaction-line"></div>
      <div>
        <div className="distance-time-container">
          <span className="travel-distance-time">Avg. Distance</span>
          <p className="travel-distance-time-value">{planetData.distance}</p>
        </div>
        <div className="distance-time-container">
          <span className="travel-distance-time">Est. Travle Time</span>
          <p className="travel-distance-time-value">{planetData.travel}</p>
        </div>
      </div>
    </>
  );
};

export default DestinationData;
