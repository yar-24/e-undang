import React from "react";
import styled from "styled-components";
import { mobile, fonts } from "../../../utils";
import { Link as LinkS } from "react-scroll";

const Container = styled.div`
  display: none;
  ${mobile({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    height: "10vh",
    top: 65,
    zIndex: 5,
    transition: "all 0.5s ease",
    backdropFilter: "blur(16px)",
    webkitBackdropFilter: "blur(16px) ",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    color: "#000",
  })}
`;

const WrapperNav = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Nav = styled(LinkS)`
  font-weight: 500;
  font-family: ${fonts.montserrat};
  text-decoration: none;
  cursor: pointer;
`;

const NavbarMobile = ({ closeNav }) => {
  return (
    <Container onClick={closeNav}>
      <WrapperNav>
        <Nav to="home" smooth={true} duration={500} exact="true">
          Home
        </Nav>
        <Nav to="tema" smooth={true} duration={500}>
          Tema
        </Nav>
        <Nav to="harga" smooth={true} duration={500}>
          Harga
        </Nav>
        <Nav to="faq" smooth={true} duration={500}>
          FAQ
        </Nav>
      </WrapperNav>
    </Container>
  );
};

export default NavbarMobile;
