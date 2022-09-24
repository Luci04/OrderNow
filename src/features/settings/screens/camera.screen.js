import React, { useRef, useState, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { Button, TouchableOpacity, View } from "react-native";
import { SafeArea } from "../../../features/restaurants/components/utils/safe-area.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const cameraRef = useRef();
  const [haspermission, setHasPermission] = useState(null);

  useFocusEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  });

  if (haspermission === null) {
    return <View />;
  }

  if (haspermission === false) {
    return <Text>No Access to Camera</Text>;
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <ProfileCamera
      ratio={"16:9"}
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    >
      <TouchableOpacity style={{ flex: 1 }} onPress={snap}></TouchableOpacity>
    </ProfileCamera>
  );
};
