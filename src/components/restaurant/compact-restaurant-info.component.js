import React from "react";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { Text } from "../../features/restaurants/components/typography/text.component";
import { Platform, Image } from "react-native";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactRestaurantInfo = ({ restaurant, FavList = false }) => {
  const Image = isAndroid && !FavList ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image
        source={{
          uri: restaurant.photos[0],
        }}
      />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
