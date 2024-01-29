import React, { useState } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components";
import { scale, verticalScale } from "react-native-size-matters";
import { PinInput } from "@components/molecules/pin-input";

export interface ContainerProps {
  style?: StyleProp<ViewStyle>;
  onPinChange: (pinData: { pin: string; storedValues: string }) => void;
}

export default function PinContainer({
  style,
  onPinChange,
  ...props
}: ContainerProps) {
  const [storedValues, setStoredValues] = useState<string>("");
  const handlePinChange = (value: string) => {
    const newStoredValues = storedValues + value;
    setStoredValues(newStoredValues);
    onPinChange({ pin: newStoredValues, storedValues: newStoredValues });
  };

  return (
    <InputsContainer {...props} style={style}>
      {[1, 2, 3, 4].map((index) => (
        <PinInput
          key={index}
          color="#f6f6f6"
          label=""
          placeholder=""
          inputWidth={30}
          inputHeight={30}
          visible={true}
          secureTextEntry={true}
          onChangeText={(value) => handlePinChange(value)}
          // constrainLength={1}
        />
      ))}
    </InputsContainer>
  );
}

const InputsContainer = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
