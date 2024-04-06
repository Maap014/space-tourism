import { useEffect, useState } from "react";

const UseFetch = (planetInfo) => {
  const [planetData, setPlanetData] = useState(null);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (planetInfo === "destinations") {
          setPlanetData(data.destinations);
        } else if (planetInfo === "crew") {
          setPlanetData(data.crew);
        } else if (planetInfo === "technology") {
          setPlanetData(data.technology);
        }
        setFetching(false);
      })
      .catch(
        (err) => console.error("Error fetching data:", err),
        setFetching(false)
      );
  }, [planetInfo]);

  return { planetData, fetching };
};

export default UseFetch;
