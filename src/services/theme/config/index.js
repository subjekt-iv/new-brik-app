import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const themeConfig = {
  dark: {
    background: {
      primary: "#FF1C6D",
      app: "#141414",
      balance: "#1F1F1F",
      login: "#222222",
      buttonApp: "#2F2F2F",
      buttonNotSelected: "#565656",
      buttonBordered: "#1C1C1C",
      textField: "#363636",
      numericKeyboard: "#1F1F1F",
      keyboardTouch: "#B5154E",
      secondPlane: "#000000",
      transactions: "#272727",
      ars: "#0096D6",
    },
    text: {
      primary: "#F6F6F6",
      secondary: "#C1C1C1",
      third: "#727272",
      GRBull: "#42B919",
      BTC: "#E9983d",
      error: "#FF2E00",
    },
    icons: {
      primary: "#F1F1F1",
      secondary: "#B9B9B9",
      white: "#FFFFFF",
    },
    button: {
      l: {
        width: scale(220),
        height: verticalScale(32),
        borderRadius: 12,
      },
      m: {
        width: scale(180),
        height: verticalScale(32),
        borderRadius: 8,
      },
      s: {
        width: scale(120),
        height: verticalScale(32),
        borderRadius: 8,
      },
    },
    input: {
      l: {
        width: scale(220),
        height: verticalScale(32),
        borderRadius: 10,
      },
      m: {
        width: scale(180),
        height: verticalScale(32),
        borderRadius: 10,
      },
      s: {
        width: scale(120),
        height: verticalScale(32),
        borderRadius: 10,
      },
    },
  },
  light: {},
  fontFamily: {
    regular: "IBMPlexSans-Regular",
    medium: "IBMPlexSans-Medium",
    bold: "IBMPlexSans-Bold",
  },
};
