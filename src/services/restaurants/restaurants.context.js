import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  Children,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const retriveRestaurants = () => {
    setIsloading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setRestaurants(results);
          setIsloading(false);
        })
        .catch((err) => {
          setIsloading(false);
          setError(err);
        });
    }, 5000);
  };

  useEffect(() => {
    retriveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isloading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
