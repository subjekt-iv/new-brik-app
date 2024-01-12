import styled from "styled-components/native";
import LogoMin from "../../../assets/svg/logo-min.svg";

const Container = styled.View`
  /* Add your styles here */
`;

const Logo = () => {
  return (
    <Container>
      <LogoMin />
    </Container>
  );
};

export default Logo;
