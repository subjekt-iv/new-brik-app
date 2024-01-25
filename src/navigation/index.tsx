import { useEffect, useMemo } from "react";
import { useTheme } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { navigate, navigationRef } from "@services/router";

import { OnBoardingStack } from "./stacks/on-boarding";
import { PinStack } from "./stacks/pin";
import { HomeStack } from "./stacks/home";
import { OperationsStack } from "./stacks/operations/send";

import IconComponent from "@components/atoms/icon";
import { useBearStore } from "@services/store";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function GuestStack() {
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

function AuthStack() {
  const theme = useTheme();
  const { operationInProgress } = useBearStore();

  const renderStack = useMemo(() => {
    console.log("AuthStack -> operationInProgress", operationInProgress);

    if (operationInProgress === true) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="OperationsStack"
            component={OperationsStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      );
    }

    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            let iconName: string;
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
  }, [operationInProgress]);

  return renderStack;
}

function Pin() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PinStack"
        component={PinStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export function MainNavigator() {
  const { isLogged, user } = useBearStore();
  const pinStatus: boolean = true;

  useEffect(() => {
    isLogged && !pinStatus && navigate("HomeStack", {});
    !isLogged && navigate("OnBoardingStack", {});
    console.log("MainNavigator -> isLogged", isLogged);
  }, [isLogged]);

  const renderAuthStack = () => {
    // if (pinStatus === true) {
    //   return <Pin />;
    // }
    return <AuthStack />;
  };

  const renderGuestStack = () => {
    return <GuestStack />;
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {isLogged ? renderAuthStack() : renderGuestStack()}
    </NavigationContainer>
  );
}
