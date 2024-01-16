import styled from "styled-components";
import { HomeTopBar } from "@components/organisms/home-top-bar";
import { HomeBalanceCard } from "@components/organisms/home-balance-card";
import { useCoreApi } from "@services/api/useCoreApi";
import { coreResources } from "@services/api/useCoreApi/collection";
import { useMemo } from "react";

function HomeScreen() {
  const { data } = useCoreApi(coreResources.Wallets);

  const renderHomeBalanceCard = useMemo(() => {
    return <HomeBalanceCard data={data} />;
  }, [data]);

  return (
    <SafeAreaContainer>
      <Container>
        <HomeTopBar />
        {renderHomeBalanceCard}
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
