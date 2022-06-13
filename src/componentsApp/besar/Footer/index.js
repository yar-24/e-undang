import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import styled from "styled-components";
import { colors, fonts, mobile, tablet } from "../../../utils";

const Container = styled.div`
  display: flex;
  justify-content: space-around ;
  background: ${colors.pinkBgPrimary} ;
  align-items: center;
  height: 10vh;
  width: 100%;
  max-width: 1440px ;
  border-top: 1px solid black ;
  ${mobile({padding: "0px 25px 0px", height: "5vh"})}
  ${tablet({height: "7vh"})}
`;

const Text = styled.p`
  font-family: ${fonts.josefinSans};
  ${mobile({fontSize: "13px"})}
`;

const Ig = styled.a`
  cursor: pointer;
`;

const ContainerIcons = styled.div`
`;

const IconFb = styled.a`
    cursor: pointer;
    margin-right: 20px ;
    ${mobile({marginRight: "0px"})}
`;

const IconIg = styled.a`
    cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Text>
        Copyright @ E-Undang by
        <Ig href="https://instagram.com/artyardhan?utm_medium=copy_link">
          {" "}
          artyardhan
        </Ig>{" "}
      </Text>
      <ContainerIcons>
        <IconFb>
          <AiOutlineFacebook size={25} />
        </IconFb>
        <IconIg>
          <AiOutlineInstagram size={25} />
        </IconIg>
      </ContainerIcons>
    </Container>
  );
};

export default Footer;
