import React, { useContext, useEffect } from "react";
import { AppNavigator } from "./app.navigator";
import { View, Text } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";
export const Navigation = () => {
  const { user } = useContext(AuthenticationContext);

  if (user) {
    console.log(user.uid);
  }

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
