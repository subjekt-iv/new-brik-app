import React from "react";
import styled from "styled-components/native";
import { scale, verticalScale } from "react-native-size-matters";
import Input from "@components/atoms/input";
import { View } from "react-native";

interface PinInputProps {
  label: string;
  placeholder: string;
  inputWidth: number;
  inputHeight: number;
  color: string;
  visible?: boolean;
  showError?: boolean;
  showAlert?: boolean;
  secureTextEntry?: boolean;
  maxLength?: number;
  constrainLength?: (maxlength: number) => void;
  onChangeText?: (text: string) => void;
}

const Container = styled(View)`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: space-between;
  max-width: ${scale(64)}px;
`;

export function PinInput({
  label,
  placeholder,
  inputWidth,
  inputHeight,
  color,
  visible = true,
  showError,
  showAlert,
  secureTextEntry,
  maxLength,
  ...props
}: PinInputProps) {
  return (
    <Container>
      <Input
        {...props}
        placeholder={placeholder}
        width={scale(inputWidth)}
        height={verticalScale(inputHeight)}
        secureTextEntry={secureTextEntry}
        maxLength={1}
        // editable={false}
      />
    </Container>
  );
}
