import { createStackNavigator } from "@react-navigation/stack";
import PinScreen from "@screens/pin";

const Stack = createStackNavigator();

export function PinStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PinScreen"
        component={PinScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
