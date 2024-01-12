import styled from "styled-components";
import Button from "../../components/atoms/button";
import { useAtom } from "jotai";
import { tokenAtom } from "../../services/store/user";
import { HomeTopBar } from "../../components/molecules/home-top-bar";
import { HomeBalanceCard } from "../../components/molecules/home-balance-card";

function HomeScreen({ navigation }) {
  const [token, setToken] = useAtom(tokenAtom);

  return (
    <SafeAreaContainer>
      <Container>
        <HomeTopBar />
        <HomeBalanceCard />
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

export default HomeScreen;
