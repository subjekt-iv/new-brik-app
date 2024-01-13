import { atom } from "jotai";

export const openBottomSheetAtom = atom(false);
export const bottomSheetConfigAtom = atom({
  type: "",
  title: "",
  subTitle: "",
});
