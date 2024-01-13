import BottomSheet from "react-native-simple-bottom-sheet";
import { Text, View, TouchableOpacity } from "react-native";
import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { openBottomSheetAtom } from "@services/store/bottom-sheet";

export function BottomSheetDrawer() {
  const [openBottomSheet, setOpenBottomSheet] = useAtom(openBottomSheetAtom);
  const panelRef = useRef(null);

  useEffect(() => {
    if (openBottomSheet === true) {
      panelRef.current?.togglePanel();
    }
  }, [openBottomSheet]);

  const handleCloseBottomSheet = () => {
    panelRef.current?.togglePanel();
    setOpenBottomSheet(false);
  };

  return (
    <BottomSheet sliderMinHeight={0} ref={(ref) => (panelRef.current = ref)}>
      <View
        style={{
          flex: 1,
          height: 400,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={handleCloseBottomSheet}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}
