import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import DestinationData from "../components/destinations/DestinationData";
import { useFetchData } from "./useFetchData";

const Destination = () => {
  const { planetData: destinationsData } = useFetchData("/data.json");

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (destinationsData) {
      setActive({
        id: destinationsData.destinations[0].id,
        images: destinationsData.destinations[0].images,
        name: destinationsData.destinations[0].name,
        description: destinationsData.destinations[0].description,
        distance: destinationsData.destinations[0].distance,
        travel: destinationsData.destinations[0].travel,
      });
    }
  }, [destinationsData]);

  const handleDestinationData = (destinationId) => {
    const clickedDestination = destinationsData.destinations.find(
      (dest) => dest.id === destinationId
    );

    setActive({
      id: clickedDestination.id,
      images: clickedDestination.images,
      name: clickedDestination.name,
      description: clickedDestination.description,
      distance: clickedDestination.distance,
      travel: clickedDestination.travel,
    });
  };
  console.log(active);

  return (
    <div className="wrapper">
      <div className=" destination-bg">
        <Navbar />
        <div>
          <p className="page-heading">
            <span className="page-heading-id">01</span>
            PICK YOUR DESTINATION
          </p>
          {active && (
            <div style={{ margin: "20px" }}>
              <img
                src={active.images.png}
                alt={active.name}
                className="planet-image"
              />
            </div>
          )}
        </div>

        <div className="destination-content">
          <div className="destination-names ">
            {destinationsData?.destinations.map((destination) => (
              <div
                key={destination.id}
                id={destination.name.toLocaleLowerCase()}
                className="nav-link"
                style={{
                  borderBottom:
                    active && active.id === destination.id
                      ? "2px solid #fff"
                      : "",
                  color: active && active.id === destination.id ? "#fff" : "",
                  height: "25px",
                }}
                onClick={() => {
                  handleDestinationData(destination.id);
                }}
              >
                {destination.name.toLocaleUpperCase()}
              </div>
            ))}
          </div>
          {active && <DestinationData planetData={active} />}
        </div>
      </div>
    </div>
  );
};

export default Destination;
