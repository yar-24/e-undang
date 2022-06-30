import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { colors, fonts, mobile } from "../../../../utils";
import { ThemeContext } from "../../../../context";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  bottom:0 ;
  left: 0 ;
  z-index: 5;
  height: 90vh;
  filter: drop-shadow(00px 20px 20px rgba(0, 0, 0, 0.25));
  ${mobile({
    width: "100vw",
    height: "94vh",
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(9.4px)",
  })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20vw;
  height: 90vh;
  margin: 0 0 0;
  transition: all 1s ease;
  ${mobile({ width: "60vw", height: "100vh" })}
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ButtonIcon = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 30px;
  border-radius: 5px;
  background-color: ${colors.btnSecondary};
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  ${mobile({  width: "80%" })}
`;

const ButtonGoBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 30px;
  border-radius: 5px;
  background-color: ${colors.abuGelap};
  color: ${colors.btnSecondary};
  font-weight: 700;
  cursor: pointer;
  ${mobile({  width: "80%" })}
`;

const Text = styled.p`
  margin-left: 10px;
  font-family: ${fonts.montserrat};
  font-size: 20px;
  ${mobile({ fontSize: "12px" })}
`;

const ScrollDashboard = ({ height, goBack }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container>
      <Fade left>
        <Wrapper
          style={{
            backgroundColor: darkMode ? "#555" : "#F2F2F2",
            height: height,
          }}
        >
          <ContainerButton>
            <ButtonIcon to="/dashboard">
              <AiOutlineDashboard size={18} color="#fff" />
              <Text>Dashboard</Text>
            </ButtonIcon>
            <ButtonGoBack onClick={goBack}>
              <BiArrowBack size={18} color={colors.btnSecondary} />
              <Text>Back</Text>
            </ButtonGoBack>
          </ContainerButton>
        </Wrapper>
      </Fade>
    </Container>
  );
};

export default ScrollDashboard;
