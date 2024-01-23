import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "@screens/on-boarding";
import LoginScreen from "@screens/login";
import RegisterScreen from "@screens/register";

const Stack = createStackNavigator();

export function OnBoardingStack() {
  return (
    <Stack.Navigator initialRouteName="OnBoardingScreen">
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{
          headerShown: false,
          title: "werfwf",
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          title: "werfwf",
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
          title: "werfwf",
        }}
      />
    </Stack.Navigator>
  );
}
