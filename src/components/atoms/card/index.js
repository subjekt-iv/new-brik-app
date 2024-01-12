import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const CardContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background.balance};
  border-radius: 16px;
  padding: 16px;
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 4;
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
