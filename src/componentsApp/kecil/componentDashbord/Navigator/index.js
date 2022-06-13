import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, fonts } from "../../../../utils";
import { mobile } from "../../../../responsive";
import { ThemeContext } from "../../../../context";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 8vh;
  margin-top: 50px;
  transition: all 1s ease;
  max-width: 1440px ;
  width: 100% ;
  z-index: 1;
  ${mobile({ display: "none"})}
`;

const Navigate = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  margin-left: 100px;
  transition: all 1s ease;
  text-decoration: none;
  font-family: ${fonts.montserrat};
`;

const TextNavigate = styled.p`
  ${mobile({ fontSize: "16px", marginLeft: "0px" })}
`;

const SemiNavigate = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  transition: all 1s ease;
  text-decoration: none;
  font-family: ${fonts.montserrat};
`;

const ThreeNavigate = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  transition: all 1s ease;
  text-decoration: none;
  font-family: ${fonts.montserrat};
`;

const FourNavigate = styled.div`
  font-size: 18px;
  font-weight: 400;
  transition: all 1s ease;
  text-decoration: none;
  font-family: ${fonts.montserrat};
  cursor: pointer;
`;

const Garing = styled.p`
  font-size: 24px;
  margin: 0px 10px 0px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.abuGelap} ;
  margin: 0px 5px 0px;
`;

const Navigator = (props) => {
  const {
    navigate,
    semiNavigate,
    toNavigate,
    toSemiNavigate,
    style,
    onClick,
    garing,
    toThreeNavigate,
    threeNavigate,
    toFourNavigate,
    fourNavigate, 
    arrow, text
  } = props;

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container style={style} onClick={onClick}>
      <Navigate style={{color: darkMode ? "#ffffff" : "#333"}} to={toNavigate}>
        <TextNavigate>{navigate}</TextNavigate>
      </Navigate>
      <Garing>/</Garing>
      <SemiNavigate style={{color: darkMode ? "#ffffff" : "#333"}} to={toSemiNavigate}>
        {semiNavigate}
      </SemiNavigate>
      <Garing>{garing}</Garing>
      <ThreeNavigate style={{color: darkMode ? "#ffffff" : "#333"}} to={toThreeNavigate}>
        {threeNavigate}
      </ThreeNavigate>
      <Garing>{garing}</Garing>
      <FourNavigate style={{color: darkMode ? "#ffffff" : "#333"}} onClick={toFourNavigate}>
        {fourNavigate}
      </FourNavigate>
      <Garing>{arrow}</Garing>
      <Text>{text}</Text>
    </Container>
  );
};

export default Navigator;
