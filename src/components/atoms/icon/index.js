import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const IconWrapper = styled(TouchableOpacity)`
  /* Add your custom styles here */
`;

const IconComponent = ({ name, size, color, onPress }) => {
  return (
    <IconWrapper onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </IconWrapper>
  );
};

export default IconComponent;
