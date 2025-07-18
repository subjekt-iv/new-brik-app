import styled from "styled-components";
import { HomeTopBar } from "@components/organisms/home-top-bar";
import { HomeBalanceCard } from "@components/organisms/home-balance-card";
import { useCoreApi } from "@services/api/useCoreApi";
import { coreResources } from "@services/api/useCoreApi/collection";
import { useEffect, useMemo } from "react";
import { SafeAreaView, View } from "react-native";

function HomeScreen() {
  const { data, loading, triggerFetch } = useCoreApi(coreResources.Wallets);

  const renderHomeBalanceCard = useMemo(() => {
    return <HomeBalanceCard data={data} loading={loading} />;
  }, [data, loading]);

  useEffect(() => {
    triggerFetch();
  }, []);

  return (
    <SafeAreaContainer>
      <Container>
        <HomeTopBar />
        {renderHomeBalanceCard}
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
  align-items: center;
`;

export default HomeScreen;
