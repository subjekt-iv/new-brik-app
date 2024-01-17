import styled from "styled-components/native";
import { View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Text } from "@components/atoms/text";

const TextComponent = styled(Text)`
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

export function HomeBalanceInfo({ toggleBalance, balance }) {
  return (
    <BalanceInfo>
      <TextComponent>Balance</TextComponent>
      <TextBalance>
        {toggleBalance === true ? "$ ******" : "$ " + balance}
      </TextBalance>
    </BalanceInfo>
  );
}
