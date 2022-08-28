/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  font-family:${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcfas8NKYAEx3f4nl-H4Onh6JnouK6YExMumJKOJi&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcfas8NKYAEx3f4nl-H4Onh6JnouK6YExMumJKOJi&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcfas8NKYAEx3f4nl-H4Onh6JnouK6YExMumJKOJi&s",
    ],
    address = "100 some random Street",
    isOpenNoew = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard mode="elevated" elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: `${photos[0]}` }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
