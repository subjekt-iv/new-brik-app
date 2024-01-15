// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { atom } from "jotai";
// import { loadable } from "jotai/utils";

// const atomWithAsyncStorage = (key, initialValue) => {
//   const baseAtom = atom(initialValue);
//   baseAtom.onMount = (setValue) => {
//     (async () => {
//       const item = await AsyncStorage.getItem(key);
//       setValue(JSON.parse(item));
//     })();
//   };
//   const derivedAtom = atom(
//     (get) => get(baseAtom),
//     (get, set, update) => {
//       const nextValue =
//         typeof update === "function" ? update(get(baseAtom)) : update;
//       set(baseAtom, nextValue);
//       AsyncStorage.setItem(key, JSON.stringify(nextValue));
//     }
//   );
//   return derivedAtom;
// };

// const tokenAtom = atomWithAsyncStorage("token", null);
// const isLoggedAtom = atom(async (get) => !!get(tokenAtom));

// const loadableIsLoggedAtom = loadable(isLoggedAtom);

// export { tokenAtom, isLoggedAtom, loadableIsLoggedAtom };

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
