import React, { useState, useEffect, createContext } from "react";
import { locationRequest, locationTransform } from "./location.sevice";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState("Chicago");
  const [keyword, setKeyword] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setisLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword) {
      return;
    }

    locationRequest(keyword.toLowerCase().trim())
      .then(locationTransform)
      .then((result) => {
        setLocation(result);
        setisLoading(false);
      })
      .catch((err) => {
        setError(err);
        setisLoading(false);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
