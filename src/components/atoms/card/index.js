import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { FadeInUp } from "react-native-reanimated";

const CardContainer = styled(Animated.View)`
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
  return <CardContainer entering={FadeInUp}>{children}</CardContainer>;
};

export default Card;
