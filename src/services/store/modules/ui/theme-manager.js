// themeModule.js
import { themeConfig } from "@services/theme/config";

export const createThemeStore = (set) => ({
  theme: themeConfig["dark"],
  currencySelected: { id: 1, name: "ARS" },
  setCurrencySelected: (currency) => {
    set({ currencySelected: currency });
  },
  toggleTheme: () =>
    set((state) => ({
      theme:
        state.theme === themeConfig["dark"]
          ? themeConfig["light"]
          : themeConfig["dark"],
    })),
});
