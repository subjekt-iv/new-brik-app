import { getItem, removeItem, setItem } from "@services/storage";

interface AuthStore {
  token: string | null;
  isLogged: boolean;
  error_code: number | null;
  setToken: (token: string) => Promise<void>;
  removeToken: () => Promise<void>;
  setErrorCode: (errorCode: number) => Promise<void>;
}

interface UserStore {
  user: any; // You should replace 'any' with the actual type of your user data
  setUser: (user: any) => Promise<void>; // Replace 'any' with the actual type of your user data
  removeUser: () => Promise<void>;
}

export const createAuthStore = (set): AuthStore => ({
  token: getItem("token"),
  isLogged: !!getItem("token"),
  error_code: null,
  setToken: async (token: string) => {
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
  setErrorCode: async (errorCode: number) => {
    await set({ error_code: errorCode });
    setTimeout(async () => {
      await set({ error_code: null });
    }, 5000);
  },
});

export const createUserStore = (set): UserStore => ({
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
