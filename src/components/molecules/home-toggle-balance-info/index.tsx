import styled, { useTheme } from "styled-components/native";
import { scale } from "react-native-size-matters";
import IconComponent from "@components/atoms/icon";
import { TouchableOpacity } from "react-native-gesture-handler";

const ToggleBalanceIcon = styled(TouchableOpacity)`
  gap: ${scale(8)}px;
  margin-top: ${scale(8)}px;
`;

export function HomeTogglerBalanceInfo({ toggleBalance, handleHideBalance }) {
  const theme = useTheme();

  return (
    <ToggleBalanceIcon onPress={handleHideBalance}>
      <IconComponent
        name={toggleBalance ? "eye" : "eye-slash"}
        size={scale(20)}
        color={theme.background.primary}
      />
    </ToggleBalanceIcon>
  );
}
