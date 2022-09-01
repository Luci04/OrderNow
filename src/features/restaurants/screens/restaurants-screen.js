import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourite-bar.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {
  const [isToggle, setIsToggle] = useState(false);
  const { restaurants, error, isloading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {isloading && (
        <LoadingContainer>
          <Loading size={50} color={"#006ec7"} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggle={isToggle}
        onFavouritesToggle={() => setIsToggle(!isToggle)}
      />

      {isToggle && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      {!isloading && (
        <FlatList
          overScrollMode="never"
          keyExtractor={(item) => item.name}
          data={restaurants}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
