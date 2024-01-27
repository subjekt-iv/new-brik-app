import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { Text } from "@/components/atoms/text";
import PasteInput from "@/components/molecules/paste-input";
import { useCallback, useState } from "react";
import { OperationsAccountsList } from "@/components/organisms/operations-accounts-list";
import { useCoreApi } from "@/services/api/useCoreApi";
import { coreResources } from "@/services/api/useCoreApi/collection";
import Button from "@/components/atoms/button";
import { useBearStore } from "@/services/store";

function SendScreen() {
  const [walletAccount, setWalletAccount] = useState("");
  const { openBottomSheet, setBottomSheetAccountSelectedConfig } =
    useBearStore();

  const { data, loading, postData, triggerFetch } = useCoreApi(
    coreResources.SearchWallets
  );

  const handleContinue = useCallback(async () => {
    const result = await postData({
      account: walletAccount,
    });

    if (result) {
      await setBottomSheetAccountSelectedConfig({
        openBottomSheet,
        accountData: {
          name: result.titulares[0].denominacion,
          accountType: result.account_type,
          accountNumber: result.cvu,
          bank: result.entidadBancaria,
          currency: result.moneda,
        },
      });
    }
  }, [data, walletAccount]);

  return (
    <SafeAreaContainer>
      <Container>
        <TitleContainer>
          <TitleText>Buscá el contacto por CBU, CVU o Alias.</TitleText>
        </TitleContainer>
        <InputContainer>
          <PasteInput
            text={walletAccount}
            setText={setWalletAccount}
            placeholder="CBU, CVU o Alias"
            width="auto"
          />
        </InputContainer>
        <MyAccountContainer>
          <OperationsAccountsList title="Mis cuentas" accounts={[]} />
        </MyAccountContainer>
        <MyAccountContainer>
          <OperationsAccountsList title="Contactos recientes" accounts={[]} />
        </MyAccountContainer>
      </Container>
      <FooterContainer>
        <Button
          loading={loading}
          title="Continuar"
          onPress={handleContinue}
          width="auto"
        />
      </FooterContainer>
    </SafeAreaContainer>
  );
}

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.background.app};
`;

const Container = styled(View)`
  flex: 1;
  display: flex;
  margin-horizontal: 16px;
`;

const TitleContainer = styled(View)`
  display: flex;
  margin-vertical: 16px;
`;

const TitleText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.text.primary};
`;

const InputContainer = styled(View)`
  display: flex;
`;

const MyAccountContainer = styled(View)`
  display: flex;
  margin-top: 16px;
`;

const FooterContainer = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.background.app};
  padding-horizontal: 32px;
`;

export default SendScreen;
