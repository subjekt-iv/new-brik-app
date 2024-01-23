import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "@screens/on-boarding";
import LoginScreen from "@screens/login";

const Stack = createStackNavigator();

export function OnBoardingStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
