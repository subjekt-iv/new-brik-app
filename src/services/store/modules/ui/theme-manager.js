// themeModule.js
import { themeConfig } from "@services/theme/config";

export const createThemeStore = (set) => ({
  theme: themeConfig["dark"],
  toggleTheme: () =>
    set((state) => ({
      theme:
        state.theme === themeConfig["dark"]
          ? themeConfig["light"]
          : themeConfig["dark"],
    })),
});
