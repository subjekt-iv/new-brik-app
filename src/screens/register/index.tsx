import { useEffect, useState } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import { SafeAreaView, View, TouchableOpacity, Linking } from "react-native";
import styled from "styled-components";
import Button from "@components/atoms/button";
import { InputTitle } from "@components/molecules/titled-input"; // Replace with the actual path
import { Text } from "@components/atoms/text";
import { useBearStore } from "@services/store";
import { useGuestCoreApi } from "@services/api/useGuestCoreApi";
import { guestCoreResources } from "@services/api/useGuestCoreApi/collection";

function RegisterScreen() {
  const { data, loading, postData } = useGuestCoreApi(
    guestCoreResources.Signup
  );
  // @ts-ignore:next-line
  const { error_code } = useBearStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleOnPress = async () => {
    if (!email || !password || !confirmPassword) {
      setShowAlert(!email || !password || !confirmPassword);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }
    const payload = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    await postData(payload);
  };

  const handleSetEmail = (email: string) => {
    setEmail(email);
  };
  const handleSetPassword = (password: string) => {
    setPassword(password);
  };
  const handleSetConfirmationPassword = (password: string) => {
    setConfirmPassword(password);
  };

  return (
    <SafeAreaContainer>
      <ContainerText>
        <Text
          style={{
            color: "#f6f6f6",
            fontSize: scale(28),
            marginTop: verticalScale(12),
          }}
        >
          Registrarse
        </Text>
      </ContainerText>
      <ContainerTop>
        <AlignedView>
          <InputTitle
            color="#f6f6f6"
            label="Email"
            placeholder="Email"
            inputWidth={300}
            inputHeight={40}
            visible={true}
            showAlert={showAlert}
            showError={error_code !== null}
            onChangeText={handleSetEmail}
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
            showAlert={undefined}
            onChangeText={handleSetPassword}
            showError={undefined}
          />
        </AlignedView>
        <AlignedView>
          <InputTitle
            color="#f6f6f6"
            label="Confirmar Contraseña"
            placeholder="Cofirmar Contraseña"
            inputWidth={300}
            inputHeight={40}
            visible={true}
            secureTextEntry={true}
            showAlert={undefined}
            onChangeText={handleSetConfirmationPassword}
            showError={undefined}
          />
        </AlignedView>
      </ContainerTop>
      <Container>
        <Text
          style={{
            color: "#ff1c6d",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: scale(13),
          }}
        >
          La contraseña debe contener:
        </Text>
      </Container>
      <CenteredView>
        <RowContainer>
          <Text
            style={{
              color: "#f6f6f6",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: scale(10),
              marginBottom: verticalScale(4),
              marginRight: scale(2),
            }}
          >
            Al registrarte aceptás nuestras
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://brikfederation.com")}
          >
            <Text
              style={{
                color: "#ff1c6d",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: scale(10),
                marginBottom: verticalScale(4),
                textDecorationLine: "underline",
              }}
            >
              Politicas de Privacidad
            </Text>
          </TouchableOpacity>
        </RowContainer>

        <Button
          bordered={true}
          title="Registrarse"
          width={scale(300)}
          onPress={handleOnPress}
        />
      </CenteredView>
    </SafeAreaContainer>
  );
}

const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.background.app};
`;

const ContainerText = styled(View)`
  flex: 0.5;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: ${scale(24)}px;
  padding-horizontal: ${scale(24)}px;
`;
const ContainerTop = styled(View)`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${scale(8)}px;
`;

const Container = styled(View)`
  flex: 0.5;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  padding-horizontal: ${scale(24)}px;
`;

const AlignedView = styled(View)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-horizontal: ${scale(24)}px;
`;
const CenteredView = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const RowContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default RegisterScreen;
