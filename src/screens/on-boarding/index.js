import styled from "styled-components";
// import { useAtom } from "jotai";
// import { tokenAtom } from "@services/store/modules/user";
import { useBearStore } from "@services/store";

import Button from "@components/atoms/button";
import Input from "@components/atoms/input";
import Logo from "@components/atoms/logo";

function OnBoardingScreen() {
  // const [token, setToken] = useAtom(tokenAtom);
  const { token, isLogged, setToken, onInitialize } = useBearStore();

  const handleOnPress = () => {
    setToken("token");
  };

  return (
    <SafeAreaContainer>
      <Container>
        <Logo />
        <Button onPress={handleOnPress} title="Registrarse" />
        <Input placeholder="Correo electrónico" />
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
  justify-content: center;
`;

export default OnBoardingScreen;
