export interface OperationsStore {
  operationInProgress: boolean;
  operationConfig: SendOperationConfig;
  setSendOperationConfig?: (currency: string) => Promise<void>;
  updateOperationCurrentStep?: (step: number) => Promise<void>;
  clearOperationConfig?: () => Promise<void>;
}

enum Steps {
  Amount = 0,
  Recipient = 1,
  Confirmation = 2,
}

interface SendOperationConfig {
  type: "send" | "receive" | null;
  currency: string;
  steps: string[];
  stepsOptions: {
    showRecents: boolean;
    showOwnAccounts: boolean;
  };
  currentStep: Steps;
  currentStepData: Record<string, any>;
  currentStepLoading: boolean;
}

export const createOperationsStore = (set): OperationsStore => ({
  operationConfig: {
    type: null,
    steps: [],
    stepsOptions: {
      showRecents: false,
      showOwnAccounts: false,
    },
    currentStep: Steps.Amount,
    currentStepData: {},
    currentStepLoading: false,
  } as SendOperationConfig,
  operationInProgress: false,

  setSendOperationConfig: async (currency: string) => {
    const mappedConfig: SendOperationConfig = {
      type: "send",
      currency,
      steps: ["amount", "recipient", "confirmation"],
      stepsOptions: {
        showRecents: true,
        showOwnAccounts: true,
      },
      currentStep: Steps.Amount,
      currentStepData: {},
      currentStepLoading: false,
    };

    await set({
      operationInProgress: true,
      operationConfig: mappedConfig,
    });
  },
  clearOperationConfig: async () => {
    await set({
      operationInProgress: false,
      operationConfig: {
        type: null,
        steps: [],
        currentStep: Steps.Amount,
        currentStepData: {},
        currentStepLoading: false,
      },
    });
  },
});
