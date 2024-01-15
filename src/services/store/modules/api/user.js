import AsyncStorage from "@react-native-async-storage/async-storage";

// Helper function to load value from AsyncStorage
const loadFromAsyncStorage = async (key, defaultValue) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item !== null ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error("Error loading data from AsyncStorage:", error);
    return defaultValue;
  }
};

export const createAuthStore = (set) => ({
  token: null,
  isLogged: false,

  // Load values from AsyncStorage on store creation
  onInitialize: async () => {
    const token = await loadFromAsyncStorage("token", null);
    set({ token, isLogged: !!token });
  },
  // Setter for token with AsyncStorage update
  setToken: (newToken) =>
    set((state) => ({ token: newToken, isLogged: !!newToken })),
});

export default createAuthStore;
