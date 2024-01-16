import { useEffect } from "react";
import styled from "styled-components";
import { useBearStore } from "@services/store";

import Button from "@components/atoms/button";
import Carrousel from "@components/organisms/onboarding-carrousel";
import { useGuestCoreApi } from "@services/api/useGuestCoreApi";
import { guestCoreResources } from "@services/api/useGuestCoreApi/collection";

function OnBoardingScreen() {
  const { token, setToken } = useBearStore();
  const { data, loading, error, postData } = useGuestCoreApi(
    guestCoreResources.Login
  );

  const handleOnPress = async () => {
    const payload = {}; // put your user here
    await postData(payload);
  };

  useEffect(() => {
    if (data) {
      setToken(data.access_token);
    }
  }, [data]);

  return (
    <SafeAreaContainer>
      <Container>
        {/* <CenteredView> */}
        <Carrousel />
        {/* </CenteredView> */}

        {/* <Input placeholder="Correo electrónico" /> */}
        <Button onPress={handleOnPress} title="Siguiente" />
      </Container>
    </SafeAreaContainer>
  );
}

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background.app};
`;

const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
`;
// const CenteredView = styled.View`
//   align-items: flex-end;
//   justify-content: center;
//   flex: 1;
// `;

export default OnBoardingScreen;
