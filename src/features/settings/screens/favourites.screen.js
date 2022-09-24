import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurants-info-card.component";
import { Spacer } from "../../restaurants/components/spacer/spacer.component";
import { SafeArea } from "../../restaurants/components/utils/safe-area.component";
import { Text } from "react-native";
import styled from "styled-components/native";

const NoFavouriteArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {favourites.length ? null : (
        <NoFavouriteArea>
          <Text>No Favourites Yet</Text>
        </NoFavouriteArea>
      )}
      <FlatList
        overScrollMode="never"
        keyExtractor={(item) => item.name}
        data={favourites}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={1}
            // onPress={() =>
            //   navigation.navigate("RestaurantDetail", { restaurant: item })
            // }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};
