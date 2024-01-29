import { useState, useEffect } from "react";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { scale, verticalScale } from "react-native-size-matters";
import { Text } from "@components/atoms/text";
import PinContainer from "@components/organisms/pin-container";
import Button from "@/components/atoms/button";
import { useBearStore } from "@/services/store";
import { useCoreApi } from "@/services/api/useCoreApi";
import { coreResources } from "@/services/api/useCoreApi/collection";

interface PinData {
  pin: string;
  storedValues: string;
}

function PinScreen() {
  const [pin, setPin] = useState("");
  const { data, loading, postData } = useCoreApi(coreResources.VerifyPin);
  const { setProvidePin } = useBearStore();

  const handlePinChange = (pinData: PinData) => {
    const { pin: newPin, storedValues } = pinData;
    setPin(newPin);
  };
  const verifyPin = async () => {
    const payload = {
      pin: pin,
    };
    await postData(payload);
  };
  useEffect(() => {
    if (data) {
      setProvidePin(true);
    }
  });

  return (
    <SafeAreaContainer>
      <Container>
        <Text
          style={{
            color: "#f6f6f6",
            fontSize: scale(24),
            marginTop: verticalScale(12),
          }}
        >
          PIN de seguridad
        </Text>
        <PinContainer
          style={{ marginTop: scale(64) }}
          onPinChange={handlePinChange}
        />
        <Button
          title="Provide Pin"
          width={scale(300)}
          onPress={verifyPin}
          loading={loading}
        />
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
