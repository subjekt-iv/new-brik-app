import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { navigate } from "@services/router";

function BlankScreen() {
  return (
    <SafeAreaContainer>
      <Container></Container>
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
  align-items: center;
`;

export default BlankScreen;
