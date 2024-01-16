import { getItem, setItem, removeItem } from "@services/storage";

export const createAuthStore = (set, get) => ({
  token: getItem("token"),
  isLogged: !!getItem("token"),
  setToken: async (token) => {
    await setItem("token", token);
    set({
      token,
      isLogged: !!token,
    });
  },
  removeToken: async () => {
    await removeItem("token");
    set({
      token: null,
      isLogged: false,
    });
  },
});
