import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../../context";
import { mobile } from "../../../../responsive";
import { colors, fonts } from "../../../../utils";
import CardTemaUndangan from "../../CardTemaUndangan";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 90%;
  flex-direction: column;
  justify-content: center ;
  align-items: center;
  position: absolute;
  padding: 30px;
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
  font-family: ${fonts.montserrat} ;
  letter-spacing: 2px ;
  ${mobile({fontSize: "20px"})}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center ;
  flex-direction: row;
  ${mobile({ flexDirection: "column", flexWrap: "wrap", width: "100%", })}
`;

const WrapperCardTema = styled.div`
  margin: 0 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap ;
  ${mobile({
    margin: "0 10px 20px",
    padding: "5px 0 10px",
    width: "100%",
  })}
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw ;
  max-width: 300px ;
  height: 10vh ;
  max-height: 100px ;
  ${mobile({ width: "70%" })}
`;

const IndicatorPage = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  margin-top: 50px;
  ${mobile({marginTop: "10px", width: "60%"})}
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${colors.btnSecondary};
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const Lihat = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9vw;
  height: 7vh;
  color: ${colors.btnSecondary};
  border-radius: 5px;
  border: 1px solid ${colors.btnSecondary};
  font-family: ${fonts.montserrat};
  font-weight: 700;
  cursor: pointer;
  ${mobile({
    height: "4vh",
    width: "20vw",
  })}
`;
const Pilih = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9vw;
  height: 7vh;
  color: #fff;
  background-color: ${colors.btnSecondary};
  border-radius: 5px;
  border: 1px solid #fff;
  font-family: ${fonts.montserrat};
  font-weight: 700;
  cursor: pointer;
  ${mobile({
    height: "4vh",
    width: "20vw",
  })}
`;

const Nomor = styled.p``;

const PilihTemaDashboard = ({ width, lihatTema, pilihTema }) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container style={{
      color: darkMode ? "#ffffff" : "#333",
      backgroundColor: darkMode ? "#555" : "#FFFFFF",
      width: width,
      transition: "all 1s ease",
    }}>
    <Title>Pilih Tema</Title>
      <Wrapper>
        <WrapperCardTema>
          <CardTemaUndangan
            namaTema="Blue Flower"
            style={{ backgroundColor: "lightBlue" }}
          />
          <WrapperButton>
            <Lihat style={{backgroundColor: darkMode ? "#BCBCBC" : "#fff"}} onClick={lihatTema}>Lihat</Lihat>
            <Pilih onClick={pilihTema}>Pilih</Pilih>
          </WrapperButton>
        </WrapperCardTema>
        <WrapperCardTema>
          <CardTemaUndangan
            namaTema="Red Flower"
            style={{ backgroundColor: "#FD5757" }}
          />
          <WrapperButton>
            <Lihat style={{backgroundColor: darkMode ? "#BCBCBC" : "#fff"}} onClick={lihatTema}>Lihat</Lihat>
            <Pilih onClick={pilihTema}>Pilih</Pilih>
          </WrapperButton>
        </WrapperCardTema>
        <WrapperCardTema>
          <CardTemaUndangan
            namaTema="Purple Flower"
            style={{ backgroundColor: "#F057FD" }}
          />
          <WrapperButton>
            <Lihat style={{backgroundColor: darkMode ? "#BCBCBC" : "#fff"}} onClick={lihatTema}>Lihat</Lihat>
            <Pilih onClick={pilihTema}>Pilih</Pilih>
          </WrapperButton>
        </WrapperCardTema>
      </Wrapper>
      <IndicatorPage>
        <Page>
          <Nomor>1</Nomor>
        </Page>
        <Page style={{ backgroundColor: "#BCBCBC", color: "#333" }}>
          <Nomor>2</Nomor>
        </Page>
        <Page style={{ backgroundColor: "#BCBCBC", color: "#333" }}>
          <Nomor>3</Nomor>
        </Page>
      </IndicatorPage>
    </Container>
  );
};

export default PilihTemaDashboard;
