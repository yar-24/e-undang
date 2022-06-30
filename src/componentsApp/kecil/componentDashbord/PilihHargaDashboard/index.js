import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../../context";
import { fonts, mobile } from "../../../../utils";
import CardHarga from "../../CardHarga";
import ModePembayaran from "../../ModePembayaran";

const Container = styled.div`
  display: flex;
  height: 130vh;
  width: 90%;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 30px 30px 10vh;
  top: 25vh;
  right: 5vh;
  margin-left: 30px;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  ${mobile({
    position: "initial",
    flexDirection: "column",
    width: "90%",
    height: "100%",
    marginLeft: 0,
    marginTop: "120px",
    padding: "10px 0 20px",
    zIndex: "1",
  })}
`;

const Title = styled.h1`
  font-family: ${fonts.montserrat};
  letter-spacing: 2px;
  ${mobile({ fontSize: "20px" })}
`;

const ContainerCardHarga = styled.div``;

const PilihHargaDashboard = ({ hargaFree, width }) => {
  const [onClick, setOnClick] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    setOnClick(true);
  }

  const handleClose = () => {
    setOnClick(false)
  }

  return (
    <>
    {onClick && <ModePembayaran handleClose={handleClose} />}
    <Container
      style={{
        color: darkMode ? "#ffffff" : "#333",
        backgroundColor: darkMode ? "#555" : "#FFFFFF",
        width: width,
        transition: "all 1s ease",
      }}
    >
      <Title>Pilih Harga</Title>
      <ContainerCardHarga>
        <CardHarga
          style={{ backgroundColor: darkMode && "#333" }}
          bgColor={darkMode && "#333"}
          handlePremium={handleClick}
        />
      </ContainerCardHarga>
    </Container>
    </>
  );
};

export default PilihHargaDashboard;
