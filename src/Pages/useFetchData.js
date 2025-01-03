import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [planetData, setPlanetData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setPlanetData(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error("Cant fetch:", err);
      });
  }, [url]);

  return { planetData, isLoading };
};
