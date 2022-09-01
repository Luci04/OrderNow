import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/casey-lee-awj7sRviVXo-unsplash.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

export const AuthInput = styled(TextInput)`
  width: 100%;
`;
