import { StatusBar } from "expo-status-bar";
import { Provider } from "jotai";
import { MainNavigator } from "./navigation";

export default function App() {
  return (
    <Provider>
      <StatusBar style="auto" />
      <MainNavigator />
    </Provider>
  );
}
