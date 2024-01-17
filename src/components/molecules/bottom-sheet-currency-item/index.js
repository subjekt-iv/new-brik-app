import { TouchableOpacity, View } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";
import Card from "@components/atoms/card";
import { Text } from "@components/atoms/text";

const Container = styled(View)`
  height: ${verticalScale(60)}px;
`;
const Grid = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: ${moderateScale(12)}px;
`;
const Column = styled(View)`
  flex: 1;
`;

const TextPrimary = styled(Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.text.primary};
`;

const TextSecondary = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.text.secondary};
`;

export function BottomSheetCurrencyItem({ currency }) {
  const Logo = currency.logo;

  return (
    <Container>
      <Card>
        <Grid>
          <Logo />
          <Column>
            <TextPrimary>{currency.name}</TextPrimary>
            <TextSecondary>{currency.description}</TextSecondary>
          </Column>
        </Grid>
      </Card>
    </Container>
  );
}
