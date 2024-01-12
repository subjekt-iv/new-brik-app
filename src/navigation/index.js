import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAtom } from "jotai";
import { loadableIsLoggedAtom } from "../services/store/user";
import { MainTabs } from "./tabs/main";
import { OnBoardingStack } from "./stacks/on-boarding";
import { navigationRef } from "../services/router";

const Stack = createStackNavigator();

function OnBoarding() {
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

function Home() {
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

export function MainNavigator() {
  const [isLogged] = useAtom(loadableIsLoggedAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isLogged.state !== "loading" && setLoading(false);
    isLogged.data && navigationRef.current?.navigate("HomeStack");
    !isLogged.data && navigationRef.current?.navigate("OnBoardingStack");
  }, [isLogged]);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isLogged?.data ? <Home /> : <OnBoarding />}
    </NavigationContainer>
  );
}
