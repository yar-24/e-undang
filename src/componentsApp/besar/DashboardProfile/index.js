import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../context";
import { mobile } from "../../../utils";
import { MenuUser, NavDasboard, ScrollDashboard, Navigator } from "../../kecil";
import { EditProfile } from "../../kecil/componentDashbord";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 130vh;

  ${mobile({ height: "100vh" })}
`;

const DasboardProfile = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [click, setClick] = useState(false);
  const [clickMenu, setclickMenu] = useState(false);

  const handleNav = () => setClick(!click);

  const navigate = useNavigate();

  const hanldeMenuUser = () => setclickMenu(!clickMenu);

  const back = () => {
    navigate("/");
  };

  return (
    <Container
      style={{
        backgroundColor: darkMode ? "#333" : "#F2F2F2",
        color: darkMode && "#fff",
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
        navigate="Profile"
        toNavigate=""
        semiNavigate="Edit Profile"
        toSemiNavigate=""
        toThreeNavigate=""
        style={{
          width: click ? "60%" : "100%",
        }}
      />
      <EditProfile width={click && "60%"} />
    </Container>
  );
};

export default DasboardProfile;
