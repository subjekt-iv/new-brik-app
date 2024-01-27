import ARSLogo from "@assets/svg/ars-logo.svg";
import TheterLogo from "@assets/svg/theter-logo.svg";
import BTCLogo from "@assets/svg/btc-logo.svg";

export interface Currency {
  id: number;
  name: string;
  description: string;
  logo: React.FC; // Assuming logo is a file path or URL
}
const currencies: Currency[] = [
  {
    id: 1,
    name: "ARS",
    description: "Pesos Argentinos",
    logo: ARSLogo,
  },
  {
    id: 2,
    name: "USDT",
    description: "Theter",
    logo: TheterLogo,
  },
  {
    id: 3,
    name: "BTC",
    description: "Bitcoin",
    logo: BTCLogo,
  },
];

export enum BottomSheetType {
  Send = "send",
  Deposit = "deposit",
  Convert = "convert",
  CurrencySelect = "currencySelect",
}

export interface BottomSheetConfig {
  type: BottomSheetType;
  title: string;
  subTitle: string;
}

export const createBottomSheetStore = (set) => ({
  openBottomSheet: false,
  bottomSheetConfig: {
    type: "",
    title: "",
    subTitle: "",
    accountData: {},
  },
  setOpenBottomSheet: (value: boolean) => set({ openBottomSheet: value }),
  setBottomSheetConfig: (config: BottomSheetConfig) =>
    set({ bottomSheetConfig: config }),
  setBottomSheetSendConfig: (openBottomSheet: boolean) => {
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
  setBottomSheetDepositConfig: (openBottomSheet: boolean) => {
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
  setBottomSheetAccountSelectedConfig: ({
    openBottomSheet,
    accountData,
    onContinue,
  }) => {
    set({
      bottomSheetConfig: {
        type: "accountSelected",
        title: accountData.name,
        subTitle: "",
        accountData,
        onContinue,
      },

      openBottomSheet: !openBottomSheet,
    });
    set({ openBottomSheet: !openBottomSheet });
  },
});
