import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../context";
import {mobile } from "../../../utils";
import {
  MenuUser,
  NavDasboard,
  ScrollDashboard,
  Navigator,
  PilihTemaDashboard,
} from "../../kecil";

const Container = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  height: 140vh;
  ${mobile({ height: "100%" })}
`;

const DasboardPilihTema = () => {
  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const [clickMenu, setclickMenu] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleNav = () => setClick(!click);

  const hanldeMenuUser = () => setclickMenu(!clickMenu);

  const { user } = useSelector((state) => state.auth);

  const lihat = () => {
    navigate(`/contoh-tema-1/:username/${user._id}`);
  };

  const pilih = () => {
    navigate("/pilih-harga");
  };

  const back = () => {
    navigate("/dashboard");
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
        {click ? <ScrollDashboard height="130vh" goBack={back} /> : null}
        {clickMenu ? <MenuUser /> : null}
        <Navigator
          navigate="Dasboard"
          toNavigate="/dashboard"
          semiNavigate="Pilih Tema"
          toSemiNavigate="/pilih-tema"
          toThreeNavigate=""
          style={{
            width: click ? "60%" : "100%",
          }}
        />
        <PilihTemaDashboard
            width= {click && "70%"}
          lihatTema={lihat}
          pilihTema={pilih}
        />
      </Container>
  );
};

export default DasboardPilihTema;
