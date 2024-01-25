import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { scale, verticalScale } from "react-native-size-matters";
import { Text } from "@components/atoms/text";
// import { navigate } from "@services/router";

function PinScreen() {
  //   const goToLogin = () => {
  //     navigate("LoginScreen", {});
  //   };
  return (
    <SafeAreaContainer>
      <Container>
        <Text
          style={{
            color: "#f6f6f6",
            fontSize: scale(28),
            marginTop: verticalScale(24),
          }}
        >
          PIN de Seguridad
        </Text>
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

export default PinScreen;
