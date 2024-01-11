import { useAtom } from "jotai";
import { isLoggedAtom } from "../services/store/user";
import { createStackNavigator } from "@react-navigation/stack";
import { MainTabs } from "./tabs/main";
import { OnBoardingStack } from "./stacks/on-boarding";
import { useEffect } from "react";
const Stack = createStackNavigator();

export function MainNavigator() {
  const [isLogged] = useAtom(isLoggedAtom);

  if (!isLogged) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoardingStack"
          component={OnBoardingStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={MainTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
