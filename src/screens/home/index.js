import styled from "styled-components";
import { HomeTopBar } from "@components/organisms/home-top-bar";
import { HomeBalanceCard } from "@components/organisms/home-balance-card";
import { useBearStore } from "@services/store";

function HomeScreen() {
  // const store = useBearStore.getState();
  // console.log(store.transactions);

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
