import { getItem, setItem } from "@services/storage";

export const createAuthStore = (set, get) => ({
  token: getItem("token"),
  isLogged: !!getItem("token"),
  setToken: async (token) => {
    await setItem("token", token);
    set({
      token,
      isLogged: true,
    });
  },
});
