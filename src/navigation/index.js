import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAtom } from "jotai";
import { loadableIsLoggedAtom } from "../services/store/user";
import { MainTabs } from "./tabs/main";
import { OnBoardingStack } from "./stacks/on-boarding";

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

  console.log(isLogged);

  useEffect(() => {
    if (isLogged.state !== "loading") {
      setLoading(false);
    }
  }, [isLogged]);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      {isLogged?.data ? <Home /> : <OnBoarding />}
    </NavigationContainer>
  );
}
