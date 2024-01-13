import styled from "styled-components/native";
import { useAtom } from "jotai";
import { bottomSheetConfigAtom } from "@services/store/bottom-sheet";
import { moderateScale } from "react-native-size-matters";
import { BottomSheetCurrencyList } from "@components/organisms/bottom-sheet-currency-list";

const Container = styled.View`
  flex: 1;
  padding: ${moderateScale(20)}px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: ${moderateScale(12)}px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: gray;
  color: ${({ theme }) => theme.text.secondary};
`;

export function BottomSheetScreen() {
  const [bottomSheetConfig, setBottomSheetConfig] = useAtom(
    bottomSheetConfigAtom
  );
  return (
    <Container>
      <Title>{bottomSheetConfig.title}</Title>
      <Subtitle>{bottomSheetConfig.subTitle}</Subtitle>
      <BottomSheetCurrencyList />
    </Container>
  );
}
