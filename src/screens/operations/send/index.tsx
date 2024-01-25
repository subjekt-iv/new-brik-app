import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { Text } from "@/components/atoms/text";
import PasteInput from "@/components/molecules/paste-input";
import { useState } from "react";

function SendScreen() {
  const [walletAccount, setWalletAccount] = useState("");

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
            width="%100"
          />
        </InputContainer>
      </Container>
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

export default SendScreen;
