import React from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { colors } from "../../../utils";
import { Link as LinkS } from "react-scroll";
import { Love, Couple, Album, LoveLetter } from "../assets";

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 80%;
  height: 10%;
  z-index: 5;
  background-color: ${colors.secondary};
  border-radius: 20px;
  border: 1px solid ${colors.primary};
  bottom: 0;
  margin-bottom: 30px;
  ${mobile({height: "60px" })};
`;

const ContainerButton = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
margin-right: 40px;
  cursor: pointer;
`;
const Image = styled.img``;

const NavBottom = () => {
  return (
    <Container>
      <ContainerButton
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        <Image src={Love} />
      </ContainerButton>

      <ContainerButton
        to="profile"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        <Image src={Couple} />
      </ContainerButton>

      <ContainerButton
        to="galeri"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        <Image src={Album} />
      </ContainerButton>

      <ContainerButton
        to="ucapan"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        <Image src={LoveLetter} />
      </ContainerButton>
    </Container>
  );
};

export default NavBottom;
