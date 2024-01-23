import { create } from "zustand";
import { createThemeStore } from "./modules/ui/theme-manager";
import { createBottomSheetStore } from "./modules/ui/bottom-sheet-manager";
import { createAuthStore, createUserStore } from "./modules/api/user";

export const useBearStore = create((...a) => ({
  ...createThemeStore(...a),
  ...createBottomSheetStore(...a),
  ...createAuthStore(...a),
  ...createUserStore(...a),
}));
