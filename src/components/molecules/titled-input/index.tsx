import React from "react";
import styled from "styled-components/native";
import { scale, verticalScale } from "react-native-size-matters";
import Input from "@components/atoms/input";
import { Text, View } from "react-native";

interface InputTitleProps {
  label: string;
  placeholder: string;
  inputWidth: number;
  inputHeight: number;
  color: string;
  visible?: boolean;
  showError?: boolean;
  showAlert?: boolean;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

const TitledInput = styled(View)`
  gap: ${verticalScale(6)}px;
`;

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export function InputTitle({
  label,
  placeholder,
  inputWidth,
  inputHeight,
  color,
  visible = true,
  showError,
  showAlert,
  secureTextEntry,
  ...props
}: InputTitleProps) {
  return (
    <TitledInput>
      {visible && (
        <Container>
          <Text
            style={{
              color: color,
              fontSize: scale(18),
              marginTop: verticalScale(24),
            }}
          >
            {label}
          </Text>
          {showError && (
            <Text
              style={{
                color: "#FF2E00",
                fontSize: scale(12),
                marginTop: verticalScale(24),
              }}
            >
              *Credenciales Invalidas
            </Text>
          )}
          {showAlert && (
            <Text
              style={{
                color: "#FF2E00",
                fontSize: scale(12),
                marginTop: verticalScale(24),
              }}
            >
              *Credenciales Requeridas
            </Text>
          )}
        </Container>
      )}
      <Input
        {...props}
        placeholder={placeholder}
        width={scale(inputWidth)}
        height={verticalScale(inputHeight)}
        secureTextEntry={secureTextEntry}
      />
    </TitledInput>
  );
}
