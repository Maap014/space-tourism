import React from "react";

const DestinationData = ({ planetData }) => {
  return (
    <div>
      <div>
        <h1 className="active-dest-name">
          {planetData.name.toLocaleUpperCase()}
        </h1>
      </div>
      <div>
        <p className="dest-content">{planetData.description}</p>
      </div>
      <div className="demaction-line"></div>
      <div className="distance-time-container">
        <div>
          <span className="travel-distance-time">AVG. DISTANCE</span>
          <p className="travel-distance-time-value">
            {planetData.distance.toLocaleUpperCase()}
          </p>
        </div>
        <div>
          <span className="travel-distance-time">EST. TRAVLE TIME</span>
          <p className="travel-distance-time-value">
            {planetData.travel.toLocaleUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationData;
