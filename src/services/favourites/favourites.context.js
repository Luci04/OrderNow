import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
  };

  return (
    <FavouritesContextProvider.Provider
      value={{
        favourites,
        add,
        remove,
      }}
    >
      {children}
    </FavouritesContextProvider.Provider>
  );
};
