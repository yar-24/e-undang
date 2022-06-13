import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../context";
import { mobile } from "../../../utils";
import { IoIosArrowForward } from "react-icons/io";
import { MenuUser, NavDasboard, ScrollDashboard, Navigator } from "../../kecil";
import { PremiumDashboard } from "../../kecil/componentDashbord";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 3300px;
  ${mobile({ height: "100%" })}
`;

const DashboardPremium = () => {
  const navigate = useNavigate();
  const params = useParams();

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [click, setClick] = useState(false);
  const [clickMenu, setclickMenu] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleNav = () => setClick(!click);

  const hanldeMenuUser = () => setclickMenu(!clickMenu);

  const back = () => {
    navigate("/pilih-harga");
  };

  const fourNavigate = () => {
    console.log("haloo");
  };


  useEffect(() => {
    if (params.id) {
      setIsUpdate(true);
    }

  }, [params]);


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
      {isUpdate ? (
        <Navigator
          navigate="Dasboard"
          toNavigate="/dashboard"
          semiNavigate="Edit Undangan"
          toSemiNavigate=""
          toThreeNavigate=""
          toFourNavigate=""
          arrow={<IoIosArrowForward />}
          text="Premium"
          style={{
            width: click ? "60%" : "100%",
          }} />
      ) : <Navigator
          navigate="Dasboard"
          toNavigate="/dashboard"
          semiNavigate="Pilih Tema"
          toSemiNavigate="/pilih-tema"
          toThreeNavigate="/pilih-harga"
          threeNavigate="Pilih Harga"
          garing="/"
          toFourNavigate={fourNavigate}
          fourNavigate="Data Undangan"
          arrow={<IoIosArrowForward />}
          text="Premium"
          style={{
            width: click ? "60%" : "100%",
          }}
        />}
      <PremiumDashboard
        width={click && "70%"}
        styleBtn={{ width: click && "80%", transition: "all 1s ease" }}
        tombol={isUpdate ? "Update" : "Save"}
      />
    </Container>
  );
};

export default DashboardPremium;
