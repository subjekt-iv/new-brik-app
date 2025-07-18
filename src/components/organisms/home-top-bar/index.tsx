import styled, { useTheme } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";
import IconComponent from "@components/atoms/icon";
import Animated, { LightSpeedInLeft } from "react-native-reanimated";
import { useBearStore } from "@services/store";
import { Text } from "@components/atoms/text";

const Container = styled(Animated.View)`
  flex-direction: row;
`;

const Column = styled(View)`
  flex: 1;
  height: ${scale(42)}px;
  margin-bottom: ${scale(8)}px;
  margin-horizontal: ${scale(8)}px;
  space-between: space-between;
  justify-content: center;
  align-items: ${({ alignLeft }) => (alignLeft ? "flex-start" : "flex-end")};
`;

const GreetingContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const Greeting = styled(Text)`
  font-size: ${scale(18)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
  margin-horizontal: ${scale(4)}px;
`;

const Name = styled(Text)`
  font-size: ${scale(18)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.background.primary};
`;

export function HomeTopBar() {
  // @ts-ignore:next-line
  const { removeToken, removeUser, user } = useBearStore();
  const theme = useTheme();

  const handleLogout = async () => {
    await removeToken();
    await removeUser();
  };

  return (
    <Container entering={LightSpeedInLeft}>
      <Column alignLeft>
        <GreetingContainer>
          <IconComponent
            onPress={handleLogout}
            name="user-circle"
            size={scale(24)}
            color={theme.background.primary}
          />
          <Greeting>Hola</Greeting>
          <Name>{user?.legal?.first_name}</Name>
        </GreetingContainer>
      </Column>
      <Column>
        <TouchableOpacity>
          <IconComponent
            name="qrcode"
            size={scale(24)}
            color={theme.background.primary}
          />
        </TouchableOpacity>
      </Column>
    </Container>
  );
}
