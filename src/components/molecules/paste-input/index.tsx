import styled, { useTheme } from "styled-components";
import Input from "@/components/atoms/input";
import { TouchableOpacity, View } from "react-native";
import { Text } from "@/components/atoms/text";
import Clipboard from "@react-native-clipboard/clipboard";
import IconComponent from "@/components/atoms/icon";

const TextInput = styled(Input)`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  padding: 10px;
  color: ${({ theme }) => theme.text.primary};
  border: none;
`;

const IconAbsoluteContainer = styled(View)`
  position: absolute;
  right: 0;
`;

const PasteText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.background.primary};
`;

const PasteTextContainer = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.background.textField};
  border-radius: 10px;
  border: none;
  width: 60px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PasteInput = ({ ...props }) => {
  const theme = useTheme();

  const handlePaste = async () => {
    const text = await Clipboard.getString();
    props.setText(text);
  };

  const handleChangeText = (text) => {
    props.setText(text);
  };

  const handleClear = () => {
    props.setText("");
  };

  return (
    <>
      <TextInput
        {...props}
        value={props.text}
        onChangeText={handleChangeText}
      />
      <IconAbsoluteContainer>
        {props.text ? (
          <PasteTextContainer onPress={handleClear}>
            <IconComponent
              name="window-close"
              size={20}
              color={theme.background.primary}
            />
          </PasteTextContainer>
        ) : (
          <PasteTextContainer onPress={handlePaste}>
            <PasteText medium>Pegar</PasteText>
          </PasteTextContainer>
        )}
      </IconAbsoluteContainer>
    </>
  );
};

export default PasteInput;
