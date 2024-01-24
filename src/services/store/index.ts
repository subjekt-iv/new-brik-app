import { create } from "zustand";
import { createThemeStore } from "./modules/ui/theme-manager";
import { createBottomSheetStore } from "./modules/ui/bottom-sheet-manager";
import {
  createAuthStore,
  createUserStore,
  AuthStore,
  UserStore,
} from "./modules/api/user";

interface BearStore extends AuthStore, UserStore {}
export const useBearStore = create<BearStore>()((...a) => ({
  ...createThemeStore(...a),
  ...createBottomSheetStore(...a),
  ...createAuthStore(...a),
  ...createUserStore(...a),
}));
