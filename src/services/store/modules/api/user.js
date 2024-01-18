import { getItem, removeItem, setItem } from "@services/storage";

export const createAuthStore = (set) => ({
  token: getItem("token"),
  isLogged: !!getItem("token"),
  error_code: null,
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
  setErrorCode: async (errorCode) => {
    await set({ error_code: errorCode });
    setTimeout(async () => {
      await set({ error_code: null });
    }, 5000);
  },
});

export const createUserStore = (set) => ({
  user: getItem("user"),
  setUser: async (user) => {
    await setItem("user", user);
    set({
      user,
    });
  },
  removeUser: async () => {
    await removeItem("user");
    set({
      user: null,
    });
  },
});
