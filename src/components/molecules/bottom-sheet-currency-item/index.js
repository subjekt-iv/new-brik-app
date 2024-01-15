import { View, TouchableOpacity } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";
import Card from "@components/atoms/card";

export function BottomSheetCurrencyItem() {
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

  const Text = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.text.primary};
  `;

  const TextSecondary = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.text.secondary};
  `;

  return (
    <Container>
      <Card>
        <Grid>
          <Text>Item</Text>
          <Column>
            <Text>Item</Text>
            <TextSecondary>Item</TextSecondary>
          </Column>
        </Grid>
      </Card>
    </Container>
  );
}
