import React from "react";
import styled from "styled-components/native";
import { scale, verticalScale } from "react-native-size-matters";
import Input from "@components/atoms/input";
import { Text, View } from "react-native";

const TitledInput = styled(View)`
  flex-direction: column;
  gap: ${verticalScale(6)}px;
`;

export function InputTitle({
  label,
  placeholder,
  inputWidth,
  inputHeight,
  color,
  visible = true,
}) {
  return (
    <TitledInput>
      {visible && (
        <Text
          style={{
            color: color,
            fontSize: scale(18),
            marginTop: verticalScale(24),
          }}
        >
          {label}
        </Text>
      )}
      <Input
        placeholder={placeholder}
        width={scale(inputWidth)}
        height={verticalScale(inputHeight)}
      />
    </TitledInput>
  );
}
