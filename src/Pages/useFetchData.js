import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlanetData(data);
      })
      .catch((err) => console.error("Cant fetch:", err));
  }, [url]);

  return { planetData };
};
