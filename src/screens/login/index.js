import styled from "styled-components";
import { Logo } from "@components/atoms/logo";
import { View, Text } from "react-native";
import { useTheme } from "styled-components/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

function LoginScreen() {
  return (
    <SafeAreaContainer>
      <Container>
        <Logo />
        {/* <HomeTopBar />
        <HomeBalanceCard /> */}
      </Container>
    </SafeAreaContainer>
  );
}

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background.app};
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export default LoginScreen;
