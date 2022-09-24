import React from "react";
// import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.styles";

import { Spacer } from "../../../features/restaurants/components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        {/* <LottieView
          autoPlay
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#eee",
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../../../../assets/order-food.json")}
        /> */}

        <AuthButton
          onPress={() => navigation.navigate("Login")}
          mode="contained"
          icon={"lock-open-outline"}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            onPress={() => navigation.navigate("Register")}
            mode="contained"
            icon={"lock-open-outline"}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
