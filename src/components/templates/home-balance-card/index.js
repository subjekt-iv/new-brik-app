import styled from "styled-components/native";
import { useState } from "react";
import { View } from "react-native";
import Card from "@components/atoms/card";
import { scale } from "react-native-size-matters";
import { HomeTogglerBalanceInfo } from "@components/molecules/home-toggle-balance-info";
import { HomeBalanceInfo } from "@components/molecules/home-balance-info";
import { HomeOperationsButton } from "@components/organisms/home-operations-button-card";

const Container = styled(View)`
  flex-direction: column;
  width: 100%;
  padding-horizontal: ${scale(16)}px;
  height: ${scale(160)}px;
`;

const Text = styled.Text`
  font-size: ${scale(14)}px;
  color: ${({ theme }) => theme.text.primary};
`;

const Column = styled(View)`
  flex: 1;
`;

const CardBody = styled(View)`
  flex: 1;
  flex-direction: column;
`;

const CardBodyRow = styled(View)`
  flex: 1;
  flex-direction: row;
`;

const CardBodyColumn = styled(View)`
  flex: ${({ small }) => (small ? 0.3 : 1)};
  flex-direction: column;
  align-items: ${({ alignLeft, alignCenter }) => {
    if (alignLeft) return "flex-start";
    if (alignCenter) return "center";
    return "flex-end";
  }};
`;

export function HomeBalanceCard() {
  const [hideBalance, setHideBalance] = useState(true);

  const handleHideBalance = () => {
    setHideBalance(!hideBalance);
  };

  return (
    <Container>
      <Column>
        <Card>
          <CardBody>
            <CardBodyRow>
              <CardBodyColumn alignLeft>
                <HomeBalanceInfo toggleBalance={hideBalance} />
              </CardBodyColumn>
              <CardBodyColumn alignRight small marginTop>
                <Text>ARS</Text>
                <HomeTogglerBalanceInfo
                  toggleBalance={hideBalance}
                  handleHideBalance={handleHideBalance}
                />
              </CardBodyColumn>
            </CardBodyRow>
            <CardBodyColumn alignCenter>
              <HomeOperationsButton />
            </CardBodyColumn>
          </CardBody>
        </Card>
      </Column>
    </Container>
  );
}
