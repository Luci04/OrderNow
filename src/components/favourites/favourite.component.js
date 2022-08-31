import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: rgba(60, 60, 60, 0.25);
  border-radius: 50px;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 25px;
  right: 25px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Favourite = ({ restaurant }) => {
  const {
    favourites,
    add: addToFavourites,
    remove: removeFromFavourites,
  } = useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
