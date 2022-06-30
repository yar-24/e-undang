import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../context";
import { mobile } from "../../../utils";
import {
  MenuUser,
  NavDasboard,
  ScrollDashboard,
  Navigator,
  Notification,
} from "../../kecil";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 110vh;
  padding-bottom: 10vh ;
  ${mobile({ height: "100vh" })}
`;

const DasboardNotification = () => {
  const navigate = useNavigate();
  const params = useParams();

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [click, setClick] = useState(false);
  const [clickMenu, setclickMenu] = useState(false);

  const handleNav = () => setClick(!click);

  const hanldeMenuUser = () => setclickMenu(!clickMenu);

  const back = () => {
    navigate("/pilih-tema");
  };

  return (
    <Container
      style={{
        backgroundColor: darkMode ? "#333" : "#FFF",
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
      {click ? <ScrollDashboard height="140vh" goBack={back} /> : null}
      {clickMenu ? <MenuUser /> : null}
      <Navigator
        navigate="Dasboard"
        toNavigate="/dashboard"
        semiNavigate="Notifikasi Pembayaran"
        toSemiNavigate=""
        toThreeNavigate=""
        style={{
          width: click ? "60%" : "100%",
        }}
      />
      <Notification params={params} />
    </Container>
  );
};

export default DasboardNotification;
