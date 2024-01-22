// @ts-nocheck
import { View } from "react-native";
import styled from "styled-components/native";
import { ButtonIconSquare } from "@components/molecules/button-icon-square";
import { useBearStore } from "@services/store";

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  width: 90%;
`;

export function HomeOperationsButton() {
  const {
    openBottomSheet,
    setBottomSheetSendConfig,
    setBottomSheetDepositConfig,
    setBottomSheetConvertConfig,
  } = useBearStore();

  const handleSendAction = () => {
    setBottomSheetSendConfig(openBottomSheet);
  };

  const handleDepositAction = () => {
    setBottomSheetDepositConfig(openBottomSheet);
  };

  const handleConvertAction = () => {
    setBottomSheetConvertConfig(openBottomSheet);
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
        label="Ingresar"
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
