import styled from "styled-components/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import Card from "../../atoms/card";
import { scale } from "react-native-size-matters";
import IconComponent from "../../atoms/icon";

const Container = styled(View)`
  flex-direction: column;
  width: 100%;
  padding-horizontal: ${scale(16)}px;
  height: ${scale(160)}px;
`;

const Text = styled.Text`
  font-size: ${scale(14)}px;
  color: ${({ theme }) => theme.text.primary};
`;

const TextBalance = styled(Text)`
  font-size: ${scale(24)}px;
  font-weight: bold;
`;

const Column = styled(View)`
  flex: 1;
`;

const CardBody = styled(View)`
  flex: 1;
  flex-direction: column;
`;

const CardBodyRow = styled(View)`
  flex: 1;
  flex-direction: row;
`;

const CardBodyColumn = styled(View)`
  flex: ${({ small }) => (small ? 0.5 : 1)};
  flex-direction: column;
  align-items: ${({ alignLeft }) => (alignLeft ? "flex-start" : "flex-end")};
`;

const CurrencyIcon = styled(IconComponent)`
  color: ${({ theme }) => theme.background.primary};
`;

export function HomeBalanceCard() {
  const theme = useTheme();

  return (
    <Container>
      <Column>
        <Card>
          <CardBody>
            <CardBodyRow>
              <CardBodyColumn alignLeft>
                <Text>Balance</Text>
                <TextBalance numberOfLines={1}>$ 120.000,56</TextBalance>
              </CardBodyColumn>
              <CardBodyColumn alignRight small>
                <Text>ARS</Text>
                <CurrencyIcon
                  name="eye"
                  size={scale(24)}
                  color={theme.background.primary}
                />
              </CardBodyColumn>
            </CardBodyRow>
          </CardBody>
        </Card>
      </Column>
    </Container>
  );
}
