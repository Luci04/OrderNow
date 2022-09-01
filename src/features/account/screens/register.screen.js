import React, { useState, useEffect, useContext } from "react";
import { Spacer } from "../../../features/restaurants/components/spacer/spacer.component";
import { Text } from "../../../features/restaurants/components/typography/text.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles.js";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("avinashukla@gmail.com");
  const [password, setPassword] = useState("password");
  const [repeatedPassword, setRepeatedPassword] = useState("password");

  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer size="large">
          <AuthInput
            label="E-mail"
            value={email}
            caretHidden={false}
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
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContextType="password"
            autoCapatalize="none"
            onChangeText={(u) => setRepeatedPassword(u)}
          />
        </Spacer>
        <Spacer size="large"></Spacer>
        {!isLoading ? (
          <AuthButton
            mode="contained"
            onPress={() => {
              console.log(email, password, repeatedPassword);
              onRegister(email, password, repeatedPassword);
            }}
            icon="email"
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
        <Spacer size="large"></Spacer>

        <AuthButton
          mode="contained"
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          Back
        </AuthButton>

        {error && (
          <Spacer size="small">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
      </AccountContainer>
    </AccountBackground>
  );
};
