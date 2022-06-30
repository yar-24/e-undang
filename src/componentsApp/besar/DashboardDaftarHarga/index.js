import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../context";
import { mobile } from "../../../utils";
import { MenuUser, NavDasboard, ScrollDashboard, Navigator } from "../../kecil";
import { PilihHargaDashboard } from "../../kecil/componentDashbord";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 190vh;
  ${mobile({ height: "100%"})}
`;

const DasboardPilihHarga = () => {
  const navigate = useNavigate();

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
        semiNavigate="Pilih Tema"
        toSemiNavigate="/pilih-tema"
        toThreeNavigate="/pilih-tema"
        threeNavigate="Pilih Harga"
        garing="/"
        style={{
          width: click ? "60%" : "100%",
        }}
      />
      <PilihHargaDashboard width={click && "70%"} />
    </Container>
  );
};

export default DasboardPilihHarga;
