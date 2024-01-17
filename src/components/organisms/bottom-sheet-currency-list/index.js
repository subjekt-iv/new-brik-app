import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { BottomSheetCurrencyItem } from "@components/molecules/bottom-sheet-currency-item";
import { moderateScale } from "react-native-size-matters";
import { useBearStore } from "@services/store";

const CurrencyList = styled(FlatList)`
  flex: 1;
  margin-top: ${moderateScale(12)}px;
`;

const Separator = styled(View)`
  height: ${moderateScale(12)}px;
`;

export function BottomSheetCurrencyList({ currencies = [] }) {
  const { setCurrencySelected, openBottomSheet, setOpenBottomSheet } =
    useBearStore();
  const handleSetCurrencySelected = (currency) => {
    setCurrencySelected(currency);
    setOpenBottomSheet(!openBottomSheet);
  };
  return (
    <CurrencyList
      data={currencies}
      renderItem={({ item }) => (
        <BottomSheetCurrencyItem
          currency={item}
          setCurrencySelected={handleSetCurrencySelected}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
}
