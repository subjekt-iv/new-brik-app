// @ts-nocheck
import React from "react";
import { Text as RNText } from "react-native";
import styled from "styled-components";

const CustomText = styled(RNText)`
  font-family: ${({ bold, medium }) => {
    if (bold) return "IBMPlexSans-Bold";
    if (medium) return "IBMPlexSans-Medium";
    return "IBMPlexSans-Regular";
  }};
`;

export const Text = ({ children, ...props }) => {
  return <CustomText {...props}>{children}</CustomText>;
};
