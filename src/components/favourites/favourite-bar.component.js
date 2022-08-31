import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../../features/restaurants/components/spacer/spacer.component";
import CompactRestaurantInfo from "../../components/restaurant/compact-restaurant-info.component";
import { Text } from "../../features/restaurants/components/typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return null;

  return (
    <FavouritesWrapper>
      <Spacer position="left" size="small">
        <Text variant="label">Favourites</Text>
      </Spacer>

      <ScrollView
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
      >
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo FavList={true} restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
