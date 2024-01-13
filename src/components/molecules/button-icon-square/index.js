import React from "react";
import styled from "styled-components/native";
import { useTheme } from "styled-components/native";
import IconComponent from "@components/atoms/icon";
import { scale, verticalScale } from "react-native-size-matters";

const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.TouchableOpacity`
  width: ${scale(70)}px;
  height: ${verticalScale(40)}px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.background.buttonApp};
  border-radius: 20px;
`;

const Label = styled.Text`
  font-size: ${verticalScale(10)}px;
  color: ${({ theme }) => theme.text.primary};
`;

export function ButtonIconSquare({ iconName, label, onPress }) {
  const theme = useTheme();
  return (
    <ButtonContainer>
      <IconWrapper onPress={onPress}>
        <IconComponent
          name={iconName}
          color={theme.background.primary}
          size={verticalScale(18)}
        />
      </IconWrapper>
      <Label>{label}</Label>
    </ButtonContainer>
  );
}
