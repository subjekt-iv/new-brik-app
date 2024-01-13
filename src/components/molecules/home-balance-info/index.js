import styled from "styled-components/native";
import { View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const Text = styled.Text`
  font-size: ${scale(14)}px;
  color: ${({ theme }) => theme.text.primary};
`;

const BalanceInfo = styled(View)`
  flex-direction: column;
  gap: ${verticalScale(2)}px;
`;

const TextBalance = styled(Text)`
  font-size: ${verticalScale(28)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
`;

export function HomeBalanceInfo({ toggleBalance }) {
  return (
    <BalanceInfo>
      <Text>Balance</Text>
      <TextBalance>
        {toggleBalance === true ? "$ ******" : "$ 120.000,56"}
      </TextBalance>
    </BalanceInfo>
  );
}
