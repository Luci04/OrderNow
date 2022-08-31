import React from "react";
import { SvgXml } from "react-native-svg";

import { Text } from "./typography/text.component";
import { Spacer } from "./spacer/spacer.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  Open,
} from "./restaurants-info-card.styles";

import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api",
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcfas8NKYAEx3f4nl-H4Onh6JnouK6YExMumJKOJi&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcfas8NKYAEx3f4nl-H4Onh6JnouK6YExMumJKOJi&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcfas8NKYAEx3f4nl-H4Onh6JnouK6YExMumJKOJi&s",
    ],
    address = "100 some random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard mode="elevated" elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: `${photos[0]}` }} />
      <Favourite restaurant={restaurant} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`start-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <Open xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <Icon style={{ height: 15, width: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
