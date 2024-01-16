import styled from "styled-components";
import { useBearStore } from "@services/store";
import Button from "@components/atoms/button";
import Input from "@components/atoms/input";
import Logo from "@components/atoms/logo";
import { Text, View } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { InputTitle } from "@components/molecules/titled-input"; // Replace with the actual path

function LoginScreen() {
  const { token, isLogged, setToken, onInitialize } = useBearStore();

  console.log("token", token);

  const handleOnPress = async () => {
    await setToken("token");
  };

  return (
    <SafeAreaContainer>
      <ContainerTop>
        <Logo />
        <Text
          style={{
            color: "#f6f6f6",
            fontSize: scale(28),
            marginTop: verticalScale(24),
          }}
        >
          Iniciar Sesión
        </Text>
      </ContainerTop>
      <Container>
        <AlignedView>
          <InputTitle
            color="#f6f6f6"
            label="Email"
            placeholder="Email"
            inputWidth={300}
            inputHeight={40}
            visible={true}
          />
        </AlignedView>
        <AlignedView>
          <InputTitle
            color="#f6f6f6"
            label="Contraseña"
            placeholder="Contraseña"
            inputWidth={300}
            inputHeight={40}
            visible={true}
          />
        </AlignedView>
        <CenteredView>
          <Button
            onPress={handleOnPress}
            title="Iniciar sesión"
            width={scale(300)}
          />
        </CenteredView>
        <Text
          style={{
            color: "#acacac",
            fontSize: scale(10),
            marginTop: verticalScale(8),
          }}
        >
          O iniciá sesión con
        </Text>
      </Container>
      <CenteredView>
        <Text
          style={{
            color: "#acacac",
            fontSize: scale(10),
            marginBottom: verticalScale(4),
          }}
        >
          ¿No tenés cuenta?
        </Text>
        <Button
          onPress={handleOnPress}
          bordered={true}
          title="Registrarse"
          width={scale(300)}
        />
      </CenteredView>
    </SafeAreaContainer>
  );
}

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background.app};
`;

const ContainerTop = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 48;
`;

const Container = styled.View`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AlignedView = styled.View`
  align-items: flex-start;
  width: 100%;
  padding-horizontal: ${scale(24)}px;
`;
const CenteredView = styled.View`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default LoginScreen;
