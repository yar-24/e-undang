import React, { useState } from "react";
import {useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Footer, Loading } from "../../componentsApp";
import NavbarMobile from "../../componentsApp/kecil/Navbar/NavbarMobile";
import ScrollingNav from "../../componentsApp/kecil/Navbar/ScrollingNav";
import { Home, Kelebihan, Pengguna, PilihTema, Price, FAQ } from "./index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;
`;

const MainWebsite = () => {
  const [click, setClick] = useState(false);

  const handleNav = () => setClick(!click);

  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );


  const laodDashboard = () => {
    if (isLoading) {
      return (
        <Loading type={"balls"} color={"#FFFFFF"} height={"20%"} width={"20%"} />
        );
      }
      navigate("/dashboard");
    };


  return (
    <>
      <Container>
        <ScrollingNav handleClicks={handleNav} clicks={click} />
        {click && <NavbarMobile closeNav={handleNav} />}
        <Home page="home" load={laodDashboard} />
        <Pengguna />
        <Kelebihan />
        <PilihTema page="tema" />
        <Price page="harga" />
        {/* <ScrollBtnUp/> */}
        <FAQ page="faq" />
        <Footer />
      </Container>
    </>
  );
};

export default MainWebsite;
