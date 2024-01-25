import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { Text } from "@/components/atoms/text";

function SendScreen() {
  return (
    <SafeAreaContainer>
      <Container>
        <Text>SendScreen</Text>
      </Container>
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

export default SendScreen;
