// @ts-nocheck
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme } from "styled-components/native";
import { BottomSheetScreen } from "@components/templates/bottom-sheet-screen";
import { useBearStore } from "@services/store";

export function BottomSheetDrawer() {
  const theme = useTheme();
  const {
    openBottomSheet,
    bottomSheetConfig,
    setOpenBottomSheet,
    setBottomSheetConfig,
  } = useBearStore();

  const snapPoints = useMemo(() => ["20%", "60%"], []);
  const bottomSheetRef = useRef(null);
  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      setOpenBottomSheet(false);
      setBottomSheetConfig({
        type: "",
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
    >
      <BottomSheetScreen
        title={bottomSheetConfig.title}
        subTitle={bottomSheetConfig.subTitle}
      />
    </BottomSheet>
  );
}
