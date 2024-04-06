import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import DestinationData from "../components/destinations/DestinationData";

// import { NavLink } from "react-router-dom";

const Destination = () => {
  const [destinationsData, setDestinationData] = useState({
    destinations: [
      {
        id: 1,
        name: "Moon",
        images: {
          png: "./assets/destination/image-moon.png",
          webp: "./assets/destination/image-moon.webp",
        },
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
      },
      {
        name: "Mars",
        images: {
          png: "./assets/destination/image-mars.png",
          webp: "./assets/destination/image-mars.webp",
        },
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
        id: 2,
      },
      {
        name: "Europa",
        images: {
          png: "./assets/destination/image-europa.png",
          webp: "./assets/destination/image-europa.webp",
        },
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
        id: 3,
      },
      {
        name: "Titan",
        images: {
          png: "./assets/destination/image-titan.png",
          webp: "./assets/destination/image-titan.webp",
        },
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
        id: 4,
      },
    ],
    crew: [
      {
        name: "Douglas Hurley",
        images: {
          png: "./assets/crew/image-douglas-hurley.png",
          webp: "./assets/crew/image-douglas-hurley.webp",
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      },
      {
        name: "Mark Shuttleworth",
        images: {
          png: "./assets/crew/image-mark-shuttleworth.png",
          webp: "./assets/crew/image-mark-shuttleworth.webp",
        },
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      },
      {
        name: "Victor Glover",
        images: {
          png: "./assets/crew/image-victor-glover.png",
          webp: "./assets/crew/image-victor-glover.webp",
        },
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      },
      {
        name: "Anousheh Ansari",
        images: {
          png: "./assets/crew/image-anousheh-ansari.png",
          webp: "./assets/crew/image-anousheh-ansari.webp",
        },
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
    ],
    technology: [
      {
        name: "Launch vehicle",
        images: {
          portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
          landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
        },
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      {
        name: "Spaceport",
        images: {
          portrait: "./assets/technology/image-spaceport-portrait.jpg",
          landscape: "./assets/technology/image-spaceport-landscape.jpg",
        },
        description:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      },
      {
        name: "Space capsule",
        images: {
          portrait: "./assets/technology/image-space-capsule-portrait.jpg",
          landscape: "./assets/technology/image-space-capsule-landscape.jpg",
        },
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },
    ],
  });

  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive({
      id: destinationsData.destinations[0].id,
      images: destinationsData.destinations[0].images,
      name: destinationsData.destinations[0].name,
      description: destinationsData.destinations[0].description,
      distance: destinationsData.destinations[0].distance,
      travel: destinationsData.destinations[0].travel,
    });
  }, []);

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
    console.log(active);
  };

  return (
    <div className="wrapper">
      <div className=" destination-bg">
        <Navbar />
        <div>
          <p className="page-heading">
            <span className="page-heading-id">01</span>
            PICK YOUR DESTINATION
          </p>
          <div>
            <img
              src={active && active.images.png}
              alt={active && active.name}
              className="planet-image"
            />
          </div>
        </div>

        <div className="destination-content">
          <div className="destination-names ">
            {destinationsData.destinations.map((destination) => (
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

          {/* <h2>MOON</h2>
          <p
            style={{
              fontFamily: "Barlow",
              lineHeight: "25px",
            }}
          >
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr />
          <div className="avg-distance">
            <p>AVG. DISTANCE</p>
            <p>384,400 km</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Destination;
