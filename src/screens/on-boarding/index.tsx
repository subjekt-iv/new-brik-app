import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import Button from "@components/atoms/button";
import Carrousel from "@components/organisms/onboarding-carrousel";

function OnBoardingScreen() {
  return (
    <SafeAreaContainer>
      <Container>
        {/* <CenteredView> */}
        <Carrousel />
        {/* </CenteredView> */}

        {/* <Input placeholder="Correo electrónico" /> */}
        <Button title="Siguiente" onPress={undefined} width={undefined} />
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
