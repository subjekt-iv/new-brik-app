import { getItem, removeItem, setItem } from "@services/storage";

export interface AuthStore {
  token: string | null;
  isLogged: boolean;
  error_code: number | null;
  did_provide_pin: boolean;
  setAccessToken: (token: string) => Promise<void>;
  setRefreshToken: (token: string) => Promise<void>;
  removeToken: () => Promise<void>;
  setErrorCode: (errorCode: number) => Promise<void>;
  setProvidePin: (params: boolean) => Promise<void>;
}
export interface UserStore {
  user: User | null;
  setUser: (user: User) => Promise<void>;
  removeUser: () => Promise<void>;
}
export interface User {
  email: string;
  has_company: boolean;
  has_pin_enabled: boolean;
  has_two_factor_enabled: boolean;
  legal: {
    address: string | null;
    address_old: string;
    birthday: string;
    first_name: string;
    last_name: string;
    legal_category: string;
    legal_data: string;
    legal_status: string;
    nationality: number;
    pep: boolean;
    sex: string;
    tax_id: string;
    user: string;
    verification_step: string | null;
  };
  legalStatus: string;
  username: string;
  uuid: string;
}

export const createAuthStore = (set): AuthStore => ({
  token: getItem("token"),
  isLogged: !!getItem("token"),
  error_code: null,
  did_provide_pin: false,
  setAccessToken: async (token: string) => {
    await setItem("token", token);
    set({
      token,
      isLogged: !!token,
    });
  },
  setRefreshToken: async (token: string) => {
    await setItem("refresh_token", token);
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
  setProvidePin: async (params: boolean) => {
    await set({ did_provide_pin: params });
  },
});

const initialUser: User | null = getItem("user") || null;
export const createUserStore = (set): UserStore => ({
  user: initialUser,
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
