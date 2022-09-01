import React, { useState, useContext } from "react";
import { Spacer } from "../../../features/restaurants/components/spacer/spacer.component";
import { Text } from "../../../features/restaurants/components/typography/text.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles.js";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("Avinashukla@gmail.com");
  const [password, setPassword] = useState("passwor");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer size="large">
          <AuthInput
            label="E-mail"
            value={email}
            textContextType="emailAddress"
            keyboardType="email-address"
            autoCapatalize="none"
            onChangeText={(u) => setEmail(u)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            secureTextEntry
            textContextType="password"
            autoCapatalize="none"
            onChangeText={(u) => setPassword(u)}
          />
        </Spacer>
        <Spacer size="large"></Spacer>
        <AuthButton
          mode="contained"
          onPress={() => {
            console.log(email, password);
            onLogin(email, password);
          }}
          icon="lock-open-outline"
        >
          Login
        </AuthButton>
        <Spacer size="large"></Spacer>

        <AuthButton
          mode="contained"
          onPress={() => {
            navigation.navigate("Main");
          }}
          icon="lock-open-outline"
        >
          Back
        </AuthButton>

        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
      </AccountContainer>
    </AccountBackground>
  );
};
