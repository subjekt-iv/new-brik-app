import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

interface InputProps extends TextInputProps {
  width?: number;
  height?: number;
  maxLength?: number;
  secureTextEntry?: boolean;
}

const getInputSize = (theme: any, size?: string) =>
  theme.input[size || "l"] || theme.input.l;

const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.background.textField};
  border-radius: 10px;
  border: none;
  width: ${({ theme, size, width }) =>
    width ? width : getInputSize(theme, size).width}px;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
`;

const StyledInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.text.secondary,
}))`
  height: ${({ theme, size, height }) =>
    height ? `${height}px` : `${getInputSize(theme, size).height}px`};
  border-width: 1px;
  border-color: #ccc;
  padding: ${moderateScale(10)}px;
  color: ${({ theme }) => theme.text.primary};
  border: none;
`;

const Input: React.FC<InputProps> = ({ width, maxLength, ...props }) => {
  return (
    <InputContainer width={width}>
      <StyledInput {...props} maxLength={maxLength} />
    </InputContainer>
  );
};

export default Input;
