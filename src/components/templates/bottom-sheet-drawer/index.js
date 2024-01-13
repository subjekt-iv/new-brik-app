import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useAtom } from "jotai";
import {
  openBottomSheetAtom,
  bottomSheetConfigAtom,
} from "@services/store/bottom-sheet";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useTheme } from "styled-components/native";

export function BottomSheetDrawer() {
  const theme = useTheme();
  const [openBottomSheet, setOpenBottomSheet] = useAtom(openBottomSheetAtom);
  const [bottomSheetConfig, setBottomSheetConfig] = useAtom(
    bottomSheetConfigAtom
  );
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const bottomSheetRef = useRef(null);
  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      setOpenBottomSheet(false);
      setBottomSheetConfig({
        title: "",
        subTitle: "",
      });
    }
  }, []);

  useEffect(() => {
    if (openBottomSheet === true) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [openBottomSheet, setOpenBottomSheet]);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        opacity={0.2}
      />
    ),
    []
  );

  return (
    <BottomSheet
      index={-1}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: theme.background.app,
      }}
    ></BottomSheet>
  );
}
