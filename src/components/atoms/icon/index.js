import React from "react";
import { View } from "react-native";

import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const IconWrapper = styled(View)`
  /* Add your custom styles here */
`;

const IconComponent = ({ name, size, color }) => {
  return (
    <IconWrapper>
      <Icon name={name} size={size} color={color} />
    </IconWrapper>
  );
};

export default IconComponent;
