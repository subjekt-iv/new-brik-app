import ARSLogo from "@assets/svg/ars-logo.svg";
import TheterLogo from "@assets/svg/theter-logo.svg";
import BTCLogo from "@assets/svg/btc-logo.svg";

const currencies = [
  {
    id: "1",
    name: "ARS",
    description: "Pesos Argentinos",
    logo: ARSLogo,
  },
  {
    id: "2",
    name: "USDT",
    description: "Theter",
    logo: TheterLogo,
  },
  {
    id: "3",
    name: "BTC",
    description: "Bitcoin",
    logo: BTCLogo,
  },
];

export const createBottomSheetStore = (set) => ({
  openBottomSheet: false,
  bottomSheetConfig: {
    type: "",
    title: "",
    subTitle: "",
  },
  setOpenBottomSheet: (value) => set({ openBottomSheet: value }),
  setBottomSheetConfig: (config) => set({ bottomSheetConfig: config }),
  setBottomSheetSendConfig: (openBottomSheet) => {
    set({
      bottomSheetConfig: {
        type: "send",
        title: "Enviar",
        subTitle: "Selecciona la moneda que quieres enviar.",
        currencies,
      },
      openBottomSheet: !openBottomSheet,
    });
  },
  setBottomSheetDepositConfig: (openBottomSheet) => {
    set({
      bottomSheetConfig: {
        type: "deposit",
        title: "Depositar",
        subTitle: "Selecciona la moneda que quieres ingresar.",
        currencies,
      },
      openBottomSheet: !openBottomSheet,
    });
    set({ openBottomSheet: !openBottomSheet });
  },
  setBottomSheetConvertConfig: (openBottomSheet) => {
    set({
      bottomSheetConfig: {
        type: "convert",
        title: "Convertir",
        subTitle: "Selecciona la moneda que quieres convertir.",
        currencies,
      },
      openBottomSheet: !openBottomSheet,
    });
    set({ openBottomSheet: !openBottomSheet });
  },
  setBottomSheetCurrencySelectConfig: (openBottomSheet) => {
    set({
      bottomSheetConfig: {
        type: "currencySelect",
        title: "Seleccionar moneda",
        subTitle: "Elige la moneda que quieras usar.",
        currencies,
      },
      openBottomSheet: !openBottomSheet,
    });
    set({ openBottomSheet: !openBottomSheet });
  },
});
