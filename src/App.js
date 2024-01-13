import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { Provider } from "jotai";
import { MainNavigator } from "./navigation";
import { themeConfig } from "./services/theme/config";
import { BottomSheetDrawer } from "./components/layouts/bottom-sheet-drawer";

export default function App() {
  return (
    <Provider>
      <ThemeProvider theme={themeConfig["dark"]}>
        <StatusBar style="light" />
        <MainNavigator />
        <BottomSheetDrawer />
      </ThemeProvider>
    </Provider>
  );
}
