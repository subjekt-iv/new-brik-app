import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../screens/home";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
