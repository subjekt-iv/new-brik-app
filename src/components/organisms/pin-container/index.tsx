import { View, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components";
import { scale, verticalScale } from "react-native-size-matters";
import { PinInput } from "@components/molecules/pin-input";
// import { navigate } from "@services/router";

interface ContainerProps {
  style?: StyleProp<ViewStyle>;
}

export default function PinContainer({
  style, // Add style property
  ...props
}: ContainerProps) {
  //   const goToLogin = () => {
  //     navigate("LoginScreen", {});
  //   };
  return (
    <InputsContainer {...props} style={style}>
      <PinInput
        color="#f6f6f6"
        label=""
        placeholder=""
        inputWidth={30}
        inputHeight={30}
        visible={true}
      ></PinInput>
      <PinInput
        color="#f6f6f6"
        label=""
        placeholder=""
        inputWidth={30}
        inputHeight={30}
        visible={true}
      ></PinInput>
      <PinInput
        color="#f6f6f6"
        label=""
        placeholder=""
        inputWidth={30}
        inputHeight={30}
        visible={true}
      ></PinInput>
      <PinInput
        color="#f6f6f6"
        label=""
        placeholder=""
        inputWidth={30}
        inputHeight={30}
        visible={true}
      ></PinInput>
    </InputsContainer>
  );
}

const InputsContainer = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
