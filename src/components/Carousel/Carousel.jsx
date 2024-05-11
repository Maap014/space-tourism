import "./carouselStyles.css";
import { useFetchData } from "../../Pages/useFetchData";

const Carousel = ({ slide }) => {
  const { planetData: CrewCarouselData } = useFetchData("/data.json");

  return (
    <div className="Carousel">
      <div style={{ display: "flex", alignContent: "center" }}>
        {CrewCarouselData?.crew.map((crewMember, idx) => {
          return (
            <img
              src={crewMember.images.png}
              alt={crewMember.name}
              key={idx}
              className={
                slide === idx ? "carousel-slide" : "carousel-slide-hidden"
              }
            />
          );
        })}
        <div className="crew-demaction-line" style={{ margin: "0px" }}></div>
      </div>
    </div>
  );
};

export default Carousel;
