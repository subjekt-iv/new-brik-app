import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { MainNavigator } from "./navigation";
import { BottomSheetDrawer } from "@components/templates/bottom-sheet-drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useBearStore } from "@services/store";

export default function App() {
  const theme = useBearStore((state) => state.theme);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <MainNavigator />
        <BottomSheetDrawer />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
