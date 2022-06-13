import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../context";
import { mobile } from "../../../utils";
import {
  MenuUser,
  NavDasboard,
  ScrollDashboard,
  Navigator,
  Dashboard,
} from "../../kecil";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 110vh;

  ${mobile({ height: "100vh", })}
`;

const DashboardUser = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [click, setClick] = useState(false);
  const [clickMenu, setclickMenu] = useState(false);

  const handleNav = () => setClick(!click);

  const hanldeMenuUser = () => setclickMenu(!clickMenu);

  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  return (
    <Container
      style={{
        backgroundColor: darkMode ? "#333" : "#F2F2F2",
        color: darkMode && "#fff",
        transition: "all 1s ease",
      }}
    >
      <NavDasboard
        handleClicks={handleNav}
        clicks={click}
        handleClickMenu={hanldeMenuUser}
        click={clickMenu}
      />
      {click ? <ScrollDashboard goBack={back} /> : null}
      {clickMenu ? <MenuUser /> : null}
      <Navigator
        navigate="Dasboard"
        toNavigate="/"
        toSemiNavigate="/"
        toThreeNavigate=""
        style={{
          width: click ? "60%" : "100%",
        }}
      />
      <Dashboard width={click ? "60%" : "80%"} />
    </Container>
  );
};

export default DashboardUser;
