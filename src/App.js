import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { Provider } from "jotai";
import { MainNavigator } from "./navigation";
import { themeConfig } from "./services/theme/config";
import { BottomSheetDrawer } from "./components/layouts/bottom-sheet-drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <ThemeProvider theme={themeConfig["dark"]}>
          <StatusBar style="light" />
          <MainNavigator />
          <BottomSheetDrawer />
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
