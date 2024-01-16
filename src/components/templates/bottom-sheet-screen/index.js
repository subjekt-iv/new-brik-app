import { useMemo } from "react";
import styled from "styled-components/native";
import { moderateScale } from "react-native-size-matters";
import { BottomSheetCurrencyList } from "@components/organisms/bottom-sheet-currency-list";
import { useBearStore } from "@services/store";
import { Text } from "@components/atoms/text";

const Container = styled.View`
  flex: 1;
  padding: ${moderateScale(20)}px;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: ${moderateScale(12)}px;
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: gray;
  color: ${({ theme }) => theme.text.secondary};
`;

export function BottomSheetScreen() {
  const { bottomSheetConfig } = useBearStore();

  const renderContent = useMemo(() => {
    return (
      <Container>
        <Title>{bottomSheetConfig.title}</Title>
        <Subtitle>{bottomSheetConfig.subTitle}</Subtitle>
        <BottomSheetCurrencyList currencies={bottomSheetConfig.currencies} />
      </Container>
    );
  }, [bottomSheetConfig]);
  return renderContent;
}
