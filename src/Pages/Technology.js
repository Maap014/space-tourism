import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useFetchData } from "./useFetchData";

const Technology = () => {
  const { planetData: technologyData } = useFetchData("/data.json");
  const [travelTech, setTravelTech] = useState(null);

  useEffect(() => {
    if (technologyData) {
      setTravelTech({
        id: technologyData.technology[0].id,
        name: technologyData.technology[0].name,
        images: technologyData.technology[0].images,
        description: technologyData.technology[0].description,
      });
    }
  }, [technologyData]);

  const handletechTravel = (techId) => {
    const clickedTravelTech = technologyData.technology.find(
      (tech) => tech.id === techId
    );
    setTravelTech({
      id: clickedTravelTech?.id,
      name: clickedTravelTech?.name,
      images: clickedTravelTech?.images,
      description: clickedTravelTech?.description,
    });
  };
  return (
    <div className="wrapper">
      <div className="technology-bg">
        <Navbar />

        <div>
          <p className="page-heading">
            <span className="page-heading-id">03</span>
            SPACE LAUNCH 101
          </p>
          {travelTech && (
            <div>
              <img
                src={travelTech.images?.landscape}
                alt={travelTech.name}
                className="tech-image"
              />
            </div>
          )}
          {technologyData?.technology.map((tech) => {
            return (
              <>
                {travelTech && (
                  <button
                    className={`${
                      travelTech.id === tech.id ? "tech-id" : "tech-id-inactive"
                    }`}
                    key={tech}
                    id={tech.name}
                    onClick={() => handletechTravel(tech.id)}
                  >
                    {tech.id}
                  </button>
                )}
              </>
            );
          })}
          {travelTech && (
            <div>
              <h3 className="travel-tech-terminology">THE TERMINOLOGY...</h3>
              <h2 className="travel-tech-name">
                {travelTech.name.toLocaleUpperCase()}
              </h2>
              <div>
                <p className="travel-tech-description">
                  {travelTech.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
