import { useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { MainNavigator } from "./navigation";
import { BottomSheetDrawer } from "@components/templates/bottom-sheet-drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useBearStore } from "@services/store";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ThemeArgument from "styled-components";

export default function App() {
  const theme = useBearStore((state: { theme: string }) => state.theme);
  const [fontsLoaded] = useFonts({
    "IBMPlexSans-Regular": require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    "IBMPlexSans-Medium": require("./assets/fonts/IBMPlexSans-Medium.ttf"),
    "IBMPlexSans-Bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme as unknown as typeof ThemeArgument}>
        <StatusBar style="light" />
        <MainNavigator />
        <BottomSheetDrawer />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
