import { createNavigationContainerRef } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Settings: undefined;
  NotFound: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
