import styled from "styled-components";
import { useAtom } from "jotai";
import { tokenAtom } from "../../services/store/user";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/input";

function OnBoardingScreen() {
  const [token, setToken] = useAtom(tokenAtom);

  const handleOnPress = () => {
    setToken("token");
  };

  return (
    <SafeAreaContainer>
      <Container>
        <Button onPress={handleOnPress} title="Registrarse" />
        <Input placeholder="Correo electrónico" />
      </Container>
    </SafeAreaContainer>
  );
}

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default OnBoardingScreen;
