import styled from "styled-components";
import { Text } from "react-native";
import { useAtom } from "jotai";
import { tokenAtom } from "../../services/store/user";

function OnBoardingScreen() {
  const [token, setToken] = useAtom(tokenAtom);

  const handleOnPress = () => {
    setToken("token");
  };

  return (
    <SafeAreaContainer>
      <Container>
        <Button onPress={handleOnPress}>
          <Text>Onboarding done</Text>
        </Button>
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

const Button = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 10px;
  background-color: #eee;
`;

export default OnBoardingScreen;
