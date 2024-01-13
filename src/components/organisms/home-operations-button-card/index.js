import { View } from "react-native";
import styled from "styled-components/native";
import { ButtonIconSquare } from "@components/molecules/button-icon-square";
import { useAtom } from "jotai";
import { openBottomSheetAtom } from "@services/store/bottom-sheet";

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

  const handleOpenBottomSheet = () => {
    setOpenBottomSheet(true);
  };

  return (
    <Container>
      <ButtonIconSquare
        iconName="arrow-up"
        label="Enviar"
        onPress={handleOpenBottomSheet}
      />
      <ButtonIconSquare iconName="arrow-down" label="Ingresa" />
      <ButtonIconSquare iconName="exchange-alt" label="Convertir" />
    </Container>
  );
}
