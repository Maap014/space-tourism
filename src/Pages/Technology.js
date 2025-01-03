import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useFetchData } from "./useFetchData";
import { Spinner } from "../components/Loader/spinner";

const Technology = () => {
  const { planetData: technologyData, isLoading } = useFetchData("/data.json");
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

        <div className="tech-page-conatiner">
          {isLoading ? (
            <div
              style={{
                width: "100%",
                height: 500,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spinner />
            </div>
          ) : (
            <>
              <p className="page-heading">
                <span className="page-heading-id">03</span>
                SPACE LAUNCH 101
              </p>

              <div className="tech-container">
                {travelTech && (
                  <picture>
                    <source
                      srcSet={travelTech.images?.portrait}
                      media="(min-width: 1440px)"
                    />
                    <img
                      src={travelTech.images?.landscape}
                      alt={travelTech.name}
                      className="tech-image"
                    />
                  </picture>
                )}

                <div className="tech-id-and-content-container">
                  <div className="tech-id-container">
                    {technologyData?.technology.map((tech) => {
                      return (
                        <button
                          key={tech.id}
                          className={`${
                            travelTech && travelTech.id === tech.id
                              ? "tech-id"
                              : "tech-id-inactive"
                          }`}
                          id={tech.id}
                          onClick={() => handletechTravel(tech.id)}
                        >
                          {tech.id}
                        </button>
                      );
                    })}
                  </div>
                  {travelTech && (
                    <div className="tech-details">
                      <h3 className="travel-tech-terminology">
                        THE TERMINOLOGY...
                      </h3>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
