import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import RestaurantInfoCard from "../components/restaurants-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
  const { restaurants, error, isloading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        overScrollMode="never"
        keyExtractor={(item) => item.name}
        data={restaurants}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
