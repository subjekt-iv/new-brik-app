import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, View } from "react-native";
import Card from "@components/atoms/card";
import { scale } from "react-native-size-matters";
import { HomeTogglerBalanceInfo } from "@components/molecules/home-toggle-balance-info";
import { HomeBalanceInfo } from "@components/molecules/home-balance-info";
import { HomeOperationsButton } from "@components/organisms/home-operations-button-card";
import { Text } from "@components/atoms/text";
import IconComponent from "@components/atoms/icon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { useBearStore } from "@services/store";
import Animated, { FadeIn } from "react-native-reanimated";

const Container = styled(View)`
  flex-direction: column;
  width: 100%;
  padding-horizontal: ${scale(16)}px;
  height: ${scale(160)}px;
`;

const TextComponent = styled(Text)`
  font-size: ${scale(14)}px;
  color: ${({ theme }) => theme.text.primary};
`;

const Column = styled(View)`
  flex: 1;
`;

const CardBody = styled(Animated.View)`
  flex: 1;
  flex-direction: column;
`;

const CardBodyLoading = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
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

const SwitchCurrencyContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${scale(6)}px;
`;

export function HomeBalanceCard({ data }) {
  const theme = useTheme();
  const [hideBalance, setHideBalance] = useState(false);
  const [wallet, setWallet] = useState();
  const [currencySelected] = useState(1);
  const { setBottomSheetCurrencySelectConfig, openBottomSheet } =
    useBearStore();

  useEffect(() => {
    if (data) {
      const wallet = data.find(
        (wallet) => wallet.currency === currencySelected
      );
      setWallet(wallet);
    }
  }, [data, currencySelected]);

  const handleHideBalance = () => {
    setHideBalance(!hideBalance);
  };

  const handleSelectCurrency = () => {
    setBottomSheetCurrencySelectConfig(openBottomSheet);
  };

  return (
    <Container>
      <Column>
        <Card>
          {wallet ? (
            <CardBody entering={FadeIn}>
              <CardBodyRow>
                <CardBodyColumn alignLeft>
                  <HomeBalanceInfo
                    toggleBalance={hideBalance}
                    balance={parseInt(wallet?.balance).toFixed(2)}
                  />
                </CardBodyColumn>
                <CardBodyColumn alignRight small marginTop>
                  <SwitchCurrencyContainer onPress={handleSelectCurrency}>
                    <TextComponent>ARS</TextComponent>
                    <IconComponent
                      name="chevron-down"
                      size={scale(12)}
                      color={theme.text.primary}
                    />
                  </SwitchCurrencyContainer>

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
          ) : (
            <CardBodyLoading>
              <ActivityIndicator />
            </CardBodyLoading>
          )}
        </Card>
      </Column>
    </Container>
  );
}
