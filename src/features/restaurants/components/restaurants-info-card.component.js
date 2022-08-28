/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
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
    <Card mode="elevated" elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{ uri: `${photos[0]}` }}
      />
      <Title>{name}</Title>
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
