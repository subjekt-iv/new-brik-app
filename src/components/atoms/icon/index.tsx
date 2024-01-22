import { TouchableOpacity, View } from "react-native";

import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const IconWrapperPlain = styled(View)``;

const IconWrapper = styled(TouchableOpacity)`
  /* Add your custom styles here */
`;

const IconComponent = ({ name, size, color, onPress = undefined }) => {
  if (onPress === undefined) {
    return (
      <IconWrapperPlain>
        <Icon name={name} size={size} color={color} />
      </IconWrapperPlain>
    );
  }

  return (
    <IconWrapper onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </IconWrapper>
  );
};

export default IconComponent;
