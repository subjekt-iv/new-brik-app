import { View } from "react-native";
import styled from "styled-components/native";
import { ButtonIconSquare } from "@components/molecules/button-icon-square";
import { useBearStore } from "@services/store";
import ARSLogo from "@assets/svg/ars-logo.svg";
import TheterLogo from "@assets/svg/theter-logo.svg";
import BTCLogo from "@assets/svg/btc-logo.svg";

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  width: 90%;
`;

const currencies = [
  {
    id: "1",
    name: "ARS",
    description: "Pesos Argentinos",
    logo: ARSLogo,
  },
  {
    id: "2",
    name: "USDT",
    description: "Theter",
    logo: TheterLogo,
  },
  {
    id: "3",
    name: "BTC",
    description: "Bitcoin",
    logo: BTCLogo,
  },
];

export function HomeOperationsButton() {
  const { openBottomSheet, setOpenBottomSheet, setBottomSheetConfig } =
    useBearStore();

  const handleSendAction = () => {
    setBottomSheetConfig({
      type: "send",
      title: "Enviar",
      subTitle: "Selecciona la moneda que quieres enviar.",
      currencies,
    });
    setOpenBottomSheet(!openBottomSheet);
  };

  const handleDepositAction = () => {
    setBottomSheetConfig({
      type: "deposit",
      title: "Depositar",
      subTitle: "Selecciona la moneda que quieres ingresar.",
      currencies,
    });
    setOpenBottomSheet(!openBottomSheet);
  };

  const handleConvertAction = () => {
    setBottomSheetConfig({
      type: "convert",
      title: "Convertir",
      subTitle: "Selecciona la moneda que quieres convertir.",
      currencies,
    });
    setOpenBottomSheet(!openBottomSheet);
  };

  return (
    <Container>
      <ButtonIconSquare
        iconName="arrow-up"
        label="Enviar"
        onPress={handleSendAction}
      />
      <ButtonIconSquare
        iconName="arrow-down"
        label="Ingresa"
        onPress={handleDepositAction}
      />
      <ButtonIconSquare
        iconName="exchange-alt"
        label="Convertir"
        onPress={handleConvertAction}
      />
    </Container>
  );
}
