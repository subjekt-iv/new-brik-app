import styled from "styled-components";
import { Text } from "@/components/atoms/text";
import { View } from "react-native";

const Container = styled(View)`
  display: flex;
  flex-direction: column;
  padding-vertical: 16px;
`;

const TitleContainer = styled(View)`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.text.primary};
`;

const NotAccountsText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.text.secondary};
  margin-vertical: 8px;
`;

const Separator = styled(View)`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.background.buttonApp};
  margin-vertical: 8px;
`;

const OperationsAccountsListItem = ({ account, onPress }) => {
  return <> </>;
};

export const OperationsAccountsList = ({ title, accounts, onPress = {} }) => {
  return (
    <Container>
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
      <Separator />
      {accounts.length > 0 ? (
        accounts.map((account, index) => (
          <OperationsAccountsListItem
            key={index}
            account={account}
            onPress={onPress}
          />
        ))
      ) : (
        <NotAccountsText>Aquí apareceran tus cuentas.</NotAccountsText>
      )}
    </Container>
  );
};
