import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OnBoardingStack } from "./stacks/on-boarding";
import { navigationRef } from "@services/router";
import { HomeStack } from "./stacks/home";
import IconComponent from "@components/atoms/icon";
import { useTheme } from "styled-components/native";
import { useBearStore } from "@services/store";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === "HomeStack") {
            iconName = "home";
          } else if (route.name === "WalletStack") {
            iconName = "wallet";
          } else if (route.name === "CardStack") {
            iconName = "credit-card";
          }
          return (
            <IconComponent
              name={iconName}
              size={size}
              color={focused ? theme.background.primary : theme.icons.white}
            />
          );
        },
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: theme.background.app,
          borderTopColor: theme.background.buttonApp,
        },
        tabBarItemStyle: {
          marginTop: 10,
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="WalletStack" component={HomeStack} />
      <Tab.Screen name="CardStack" component={HomeStack} />
    </Tab.Navigator>
  );
}

export function MainNavigator() {
  const { token, isLogged, setToken, onInitialize } = useBearStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isLogged.state !== "loading" && setLoading(false);
    isLogged && navigationRef.current?.navigate("HomeStack");
    !isLogged && navigationRef.current?.navigate("OnBoardingStack");
  }, [isLogged]);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {isLogged ? <Home /> : <OnBoarding />}
    </NavigationContainer>
  );
}
