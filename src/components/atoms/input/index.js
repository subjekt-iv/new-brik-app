import { TextInput } from "react-native";
import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

const getInputSize = (theme, size) => theme.input[size] || theme.input.l;

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

const Input = ({ width, ...props }) => {
  return (
    <InputContainer width={width}>
      <StyledInput {...props} />
    </InputContainer>
  );
};

export default Input;
