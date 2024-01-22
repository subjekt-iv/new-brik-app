// @ts-nocheck
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
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
import { useCoreApi } from "@services/api/useCoreApi";
import { coreResources } from "@services/api/useCoreApi/collection";
import ts from "typescript";

const Container = styled.View`
  flex-direction: column;
  width: 100%;
  padding-horizontal: ${scale(16)}px;
  height: ${scale(160)}px;
`;

const TextComponent = styled(Text)`
  font-size: ${scale(14)}px;
  color: ${({ theme }) => theme.text.primary};
`;

const Column = styled.View`
  flex: 1;
`;

const CardBody = styled(Animated.View)`
  flex: 1;
  flex-direction: column;
`;

const CardBodyLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CardBodyRow = styled.View`
  flex: 1;
  flex-direction: row;
`;

const CardBodyColumn = styled.View`
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

const NoAccountText = styled(Text)`
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
  font-size: ${scale(14)}px;
`;

export const HomeBalanceCard = ({ data, loading }) => {
  const theme = useTheme();
  const [hideBalance, setHideBalance] = useState(false);
  const [wallet, setWallet] = useState();
  const [currenciesWallet, setCurrenciesWallet] = useState([]);
  const { data: currencies, triggerFetch } = useCoreApi(
    coreResources.Currencies
  );

  const {
    setBottomSheetCurrencySelectConfig,
    openBottomSheet,
    currencySelected,
  } = useBearStore();

  useEffect(() => {
    if (data?.length > 0 && currencySelected?.id) {
      const wallet = data.find(
        (w) => Number(w.currency) === Number(currencySelected.id)
      );
      setWallet(wallet || null);
    }
  }, [data, currencySelected.id]);

  useEffect(() => {
    const currenciesWallet = data?.map((w) => ({ id: w.currency }));
    setCurrenciesWallet(currenciesWallet || []);
    triggerFetch();
  }, []);

  useEffect(() => {
    if (currencies?.length > 0) {
      const currenciesWalletUpdated = currenciesWallet.map((cw) => {
        const currency = currencies.find((c) => c.id === cw.id);
        return { ...cw, name: currency?.name };
      });
      setCurrenciesWallet(currenciesWalletUpdated);
    }
  }, [currenciesWallet, currencies]);

  const handleHideBalance = () => {
    setHideBalance(!hideBalance);
  };

  const handleSelectCurrency = () => {
    setBottomSheetCurrencySelectConfig(openBottomSheet);
  };

  const renderCardBody = useMemo(() => {
    if (loading) {
      return (
        <CardBodyLoading>
          <ActivityIndicator />
        </CardBodyLoading>
      );
    }
    if (wallet) {
      return (
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
                <TextComponent>{currencySelected.name}</TextComponent>
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
      );
    }
    if (!wallet && !loading) {
      return (
        <CardBody entering={FadeIn}>
          <CardBodyRow>
            <CardBodyColumn alignLeft />
            <CardBodyColumn alignRight small marginTop>
              <SwitchCurrencyContainer onPress={handleSelectCurrency}>
                <TextComponent>{currencySelected.name}</TextComponent>
                <IconComponent
                  name="chevron-down"
                  size={scale(12)}
                  color={theme.text.primary}
                />
              </SwitchCurrencyContainer>
            </CardBodyColumn>
          </CardBodyRow>
          <CardBodyColumn alignCenter>
            <NoAccountText>
              No tienes una cuenta de {currencySelected.name}
            </NoAccountText>
          </CardBodyColumn>
        </CardBody>
      );
    }
  }, [wallet, loading, hideBalance, currencySelected, theme]);

  return (
    <Container>
      <Column>
        <Card>{renderCardBody}</Card>
      </Column>
    </Container>
  );
};
