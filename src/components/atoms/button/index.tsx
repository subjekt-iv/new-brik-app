import { ActivityIndicator, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Text } from "@components/atoms/text";

const getButtonProperty = (theme, size, property) => {
  const sizes = theme.button[size] || theme.button.l;
  return sizes[property];
};

const ButtonContainer = styled(TouchableOpacity)`
  background-color: ${({ theme, bordered, disabled }) =>
    disabled
      ? theme.background.buttonNotSelected
      : bordered
      ? "#1c1c1c"
      : theme.background.primary};
  border: ${({ theme, bordered }) =>
    bordered ? `2px solid ${theme.background.primary}` : "none"};
  width: ${({ theme, size, width }) =>
    width || getButtonProperty(theme, size, "width")}px;
  height: ${({ theme, size }) => getButtonProperty(theme, size, "height")}px;
  border-radius: ${({ theme, size }) =>
    getButtonProperty(theme, size, "borderRadius")}px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 13px;
  font-weight: 600;
`;

const Button = ({
  onPress,
  title = "",
  disabled = false,
  bordered = false,
  loading = false,
  size = "l",
  width,
}) => {
  return (
    <ButtonContainer
      onPress={onPress}
      disabled={disabled || loading}
      bordered={bordered}
      size={size}
      width={width}
    >
      {loading ? <ActivityIndicator /> : <ButtonText bold>{title}</ButtonText>}
    </ButtonContainer>
  );
};

export default Button;
