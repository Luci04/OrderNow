import React from "react";

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
