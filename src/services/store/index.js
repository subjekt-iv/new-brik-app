import { create } from "zustand";
import { createThemeStore } from "./modules/ui/theme-manager";
import { createBottomSheetStore } from "./modules/ui/bottom-sheet-manager";
import { createAuthStore } from "./modules/user";

export const useBearStore = create((...a) => ({
  ...createThemeStore(...a),
  ...createBottomSheetStore(...a),
  ...createAuthStore(...a),
}));
