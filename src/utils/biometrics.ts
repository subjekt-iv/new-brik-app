import * as LocalAuthentication from "expo-local-authentication";

export const authenticate = async (): Promise<boolean> => {
  try {
    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to continue",
    });
    return success;
  } catch (error) {
    console.error("Authentication failed:", error);
    return false;
  }
};

export const getAvailableAuthenticationTypes = async (): Promise<string[]> => {
  try {
    const availableTypes =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    const availableTypesStrings = availableTypes.map((type) => type.toString());
    return availableTypesStrings;
  } catch (error) {
    console.error("Error getting available authentication types:", error);
    return [];
  }
};
