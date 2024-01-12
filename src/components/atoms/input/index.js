import { TextInput } from "react-native";
import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

const getInputSize = (theme, size) => theme.input[size] || theme.input.l;

const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.background.textField};
  border-radius: 10px;
  border: none;
  width: ${({ theme, size }) => getInputSize(theme, size).width}px;
`;

const StyledInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.text.secondary,
}))`
  height: ${({ theme, size }) => getInputSize(theme, size).height}px;
  border-width: 1px;
  border-color: #ccc;
  padding: ${moderateScale(10)}px;
  color: ${({ theme }) => theme.text.primary};
  border: none;
`;

const Input = ({ ...props }) => {
  return (
    <InputContainer>
      <StyledInput {...props} />
    </InputContainer>
  );
};

export default Input;
