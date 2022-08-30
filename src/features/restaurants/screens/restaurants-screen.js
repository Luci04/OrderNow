import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { Spacer } from "../components/spacer/spacer.component";
import { SafeArea } from "../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Color } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, error, isloading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isloading && (
        <LoadingContainer>
          <Loading size={50} color={"#006ec7"} />
        </LoadingContainer>
      )}
      <Search />
      {!isloading && (
        <FlatList
          overScrollMode="never"
          keyExtractor={(item) => item.name}
          data={restaurants}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.2}
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
