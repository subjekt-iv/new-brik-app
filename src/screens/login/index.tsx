import { useEffect, useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import Button from "@components/atoms/button";
import Logo from "@components/atoms/logo";
import { InputTitle } from "@components/molecules/titled-input"; // Replace with the actual path
import { Text } from "@components/atoms/text";
import { useBearStore } from "@services/store";
import { useGuestCoreApi } from "@services/api/useGuestCoreApi";
import { guestCoreResources } from "@services/api/useGuestCoreApi/collection";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "@services/router";

function LoginScreen() {
  const navigation = useNavigation();
  const goToRegister = () => {
    // @ts-ignore:next-line
    navigation.removeListener();
    navigate("OnBoardingStack", { screen: "RegisterScreen" });
  };
  const { data, loading, postData } = useGuestCoreApi(guestCoreResources.Login);
  // @ts-ignore:next-line
  const { setToken, setUser, error_code } = useBearStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleOnPress = async () => {
    if (!email || !password) {
      setShowAlert(!email || !password);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }
    const payload = {
      email: email,
      password: password,
    };
    await postData(payload);
  };

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setToken(data.access_token);
    }
  }, [data]);

  const handleSetEmail = (email) => {
    setEmail(email);
  };

  const handleSetPassword = (password) => {
    setPassword(password);
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
            showError={error_code !== null}
            onChangeText={handleSetEmail}
            showAlert={undefined}
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
            secureTextEntry={true}
            showAlert={showAlert}
            onChangeText={handleSetPassword}
            showError={undefined}
          />
        </AlignedView>
        <CenteredView>
          <Button
            onPress={handleOnPress}
            title="Iniciar sesión"
            width={scale(300)}
            loading={loading}
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
          bordered={true}
          title="Registrarse"
          width={scale(300)}
          onPress={goToRegister}
        />
      </CenteredView>
    </SafeAreaContainer>
  );
}

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.background.app};
`;

const ContainerTop = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${scale(48)}px;
`;

const Container = styled(View)`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AlignedView = styled(View)`
  align-items: flex-start;
  width: 100%;
  padding-horizontal: ${scale(24)}px;
`;
const CenteredView = styled(View)`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default LoginScreen;
