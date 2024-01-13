import styled from "styled-components/native";
import { View } from "react-native";
import { BottomSheetCurrencyItem } from "@components/molecules/bottom-sheet-currency-item";
import { moderateScale } from "react-native-size-matters";

const Container = styled(View)`
  flex-direction: column;
  margin-top: ${moderateScale(20)}px;
`;

const Column = styled(View)`
  flex: 1;
  flex-direction: column;
  gap: ${moderateScale(12)}px;
`;

export function BottomSheetCurrencyList() {
  return (
    <Container>
      <Column>
        <BottomSheetCurrencyItem />
        <BottomSheetCurrencyItem />
        <BottomSheetCurrencyItem />
      </Column>
    </Container>
  );
}
