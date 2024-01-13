import BottomSheet from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useAtom } from "jotai";
import { openBottomSheetAtom } from "@services/store/bottom-sheet";
import { bottomSheetConfigAtom } from "@services/store/bottom-sheet";

export function BottomSheetDrawer() {
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

  return (
    <BottomSheet
      index={-1}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
    ></BottomSheet>
  );
}
