import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { BottomSheetCurrencyItem } from "@components/molecules/bottom-sheet-currency-item";
import { moderateScale } from "react-native-size-matters";

const CurrencyList = styled(FlatList)`
  flex: 1;
  margin-top: ${moderateScale(12)}px;
`;

const Separator = styled(View)`
  height: ${moderateScale(12)}px;
`;

export function BottomSheetCurrencyList({ currencies = [] }) {
  return (
    <CurrencyList
      data={currencies}
      renderItem={({ item }) => <BottomSheetCurrencyItem currency={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
}
