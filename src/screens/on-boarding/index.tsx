import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import Button from "@components/atoms/button";
import Carrousel from "@components/organisms/onboarding-carrousel";
import { navigate } from "@services/router";

function OnBoardingScreen() {
  const goToLogin = () => {
    navigate("LoginScreen", {});
  };
  return (
    <SafeAreaContainer>
      <Container>
        <Carrousel />
        <Button title="Acceder" onPress={goToLogin} width={undefined} />
      </Container>
    </SafeAreaContainer>
  );
}

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.background.app};
`;

const Container = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
`;

export default OnBoardingScreen;
