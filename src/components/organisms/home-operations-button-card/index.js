import { View } from "react-native";
import styled from "styled-components/native";
import { ButtonIconSquare } from "@components/molecules/button-icon-square";
import { useAtom } from "jotai";
import {
  openBottomSheetAtom,
  bottomSheetConfigAtom,
} from "@services/store/bottom-sheet";

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  width: 90%;
`;

export function HomeOperationsButton() {
  const [openBottomSheet, setOpenBottomSheet] = useAtom(openBottomSheetAtom);
  const [bottomSheetConfig, setBottomSheetConfig] = useAtom(
    bottomSheetConfigAtom
  );

  const handleSendAction = () => {
    setOpenBottomSheet(true);
    setBottomSheetConfig({
      type: "send",
      title: "Enviar",
      subTitle: "Selecciona la moneda que quieres enviar.",
    });
  };

  const handleDepositAction = () => {
    setOpenBottomSheet(true);
    setBottomSheetConfig({
      type: "deposit",
      title: "Depositar",
      subTitle: "Selecciona la moneda que quieres ingresar.",
    });
  };

  const handleConvertAction = () => {
    setOpenBottomSheet(true);
    setBottomSheetConfig({
      type: "convert",
      title: "Convertir",
      subTitle: "Selecciona la moneda que quieres convertir.",
    });
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
