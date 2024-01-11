import { atom } from "jotai";
import AsyncStorage from "@react-native-async-storage/async-storage";

const atomWithAsyncStorage = (key, initialValue) => {
  const baseAtom = atom(initialValue);
  baseAtom.onMount = (setValue) => {
    (async () => {
      const item = await AsyncStorage.getItem(key);
      setValue(JSON.parse(item));
    })();
  };
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      AsyncStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
  return derivedAtom;
};

const tokenAtom = atomWithAsyncStorage("token", null);
const isLoggedAtom = atom((get) => !!get(tokenAtom));

export { tokenAtom, isLoggedAtom };
