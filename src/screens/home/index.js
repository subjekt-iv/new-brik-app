import styled from "styled-components";
import Button from "../../components/atoms/button";
import { useAtom } from "jotai";
import { tokenAtom } from "../../services/store/user";

function HomeScreen({ navigation }) {
  const [token, setToken] = useAtom(tokenAtom);

  const handleOnPress = () => {
    setToken(null);
  };

  return (
    <SafeAreaContainer>
      <Container>
        <Button onPress={handleOnPress} title="Go to on-boarding" />
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

export default HomeScreen;
