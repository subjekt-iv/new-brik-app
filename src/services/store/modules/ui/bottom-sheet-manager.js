export const createBottomSheetStore = (set) => ({
  openBottomSheet: false,
  bottomSheetConfig: {
    type: "",
    title: "",
    subTitle: "",
  },
  setOpenBottomSheet: (value) => set({ openBottomSheet: value }),
  setBottomSheetConfig: (config) => set({ bottomSheetConfig: config }),
});
