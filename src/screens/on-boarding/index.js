import styled from "styled-components";
import { useBearStore } from "@services/store";
import Button from "@components/atoms/button";
import Input from "@components/atoms/input";
import Logo from "@components/atoms/logo";
import Carrousel from "@components/organisms/onboarding-carrousel";

function OnBoardingScreen() {
  const { token, isLogged, setToken, onInitialize } = useBearStore();

  console.log("token", token);

  const handleOnPress = async () => {
    await setToken("token");
  };

  return (
    <SafeAreaContainer>
      <Container>
        {/* <CenteredView> */}
        <Carrousel />
        {/* </CenteredView> */}

        {/* <Input placeholder="Correo electrónico" /> */}
        <Button onPress={handleOnPress} title="Siguiente" />
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
  display: flex;
  align-items: center;
`;
// const CenteredView = styled.View`
//   align-items: flex-end;
//   justify-content: center;
//   flex: 1;
// `;

export default OnBoardingScreen;
