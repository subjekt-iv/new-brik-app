import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../../../screens/on-boarding";

const Stack = createStackNavigator();

export function OnBoardingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
