import styled from "styled-components";
import { Text } from "@/components/atoms/text";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";

const Container = styled(View)`
  display: flex;
  flex-direction: column;
  padding-vertical: 16px;
`;

const AccountContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AccountText = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.text.primary};
`;

export const BottomSheetAccountDetails = ({ account }) => {
  return (
    <Container>
      <AccountContainer>
        <>
          <AccountText>{account.accountType}</AccountText>
          <AccountText>{account.accountNumber}</AccountText>
        </>
      </AccountContainer>
    </Container>
  );
};
