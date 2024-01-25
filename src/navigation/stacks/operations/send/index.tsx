import IconComponent from "@/components/atoms/icon";
import { Text } from "@/components/atoms/text";
import { createStackNavigator } from "@react-navigation/stack";
import SendScreen from "@screens/operations/send";
import { scale } from "react-native-size-matters";
import styled, { useTheme } from "styled-components";
import { View } from "react-native";
import { navigate } from "@/services/router";
import { useBearStore } from "@/services/store";

const Stack = createStackNavigator();

const ChevronContainer = styled(View)`
  margin-left: ${scale(6)}px;
`;

export function OperationsStack() {
  const theme = useTheme();
  const { clearOperationConfig } = useBearStore();
  const handleGoBack = async () => {
    await clearOperationConfig();
    navigate("HomeStack", {});
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: theme.text.primary,
        headerStyle: {
          backgroundColor: theme.background.app,
          shadowColor: "transparent",
          elevation: 0,
        },
        headerTitle: () => {
          return (
            <Text
              style={{
                color: theme.text.primary,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Enviar
            </Text>
          );
        },
      }}
    >
      <Stack.Screen
        name="SendScreen"
        component={SendScreen}
        options={{
          headerLeft: () => {
            return (
              <ChevronContainer>
                <IconComponent
                  onPress={handleGoBack}
                  name="chevron-left"
                  size={20}
                  color={theme.icons.primary}
                />
              </ChevronContainer>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
