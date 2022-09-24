import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { List, Divider, Avatar } from "react-native-paper";
import { SafeArea } from "../../restaurants/components/utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../restaurants/components/spacer/spacer.component";
import { Text } from "../../restaurants/components/typography/text.component";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
    margin:16px
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  const [photo, setPhoto] = useState(null);

  const [photoUri, setPhotoUri] = useState(null);

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <AvatarContainer>
          {!photo && (
            <Avatar.Icon size={200} icon="account" backgroundColor="grey" />
          )}
          {photo && <Avatar.Image size={200} source={{ uri: photo }} />}
          <Spacer position="top" size="large">
            <Text variant="caption">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
      </TouchableOpacity>
      <List.Section>
        <SettingItem
          title="Favourites"
          left={(props) => (
            <List.Icon {...props} icon="heart" color="tomato"></List.Icon>
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
        <Divider />
        <SettingItem
          title="logout"
          left={(props) => (
            <List.Icon {...props} color="tomato" icon="logout"></List.Icon>
          )}
          onPress={onLogout}
        />
        <Divider />
      </List.Section>
    </SafeArea>
  );
};
