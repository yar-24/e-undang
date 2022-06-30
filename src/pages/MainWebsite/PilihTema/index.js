import React from "react";
import styled from "styled-components";
import { colors, fonts, mobile, tablet } from "../../../utils";
import { CardTemaUndangan } from "../../../componentsApp/kecil";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100% ;
  max-width: 1440px ;
  max-height: 650px ;
  margin-bottom: 20px ;
  background: ${colors.pinkBgSecondary};
  ${mobile({ maxHeight: "100%" })}
  ${tablet({height: "100%"})}
`;

const Top = styled.div`
  text-align: center;
  margin-top: 20px;
  width: 60%;
  ${mobile({marginTop: "10px", width: "90%"})}
  ${tablet({marginBottom: "20px"})}
  `;

const Title = styled.h1`
  font-family: ${fonts.montserrat};
  ${mobile({fontSize: "20px"})}
`;

const Text = styled.p`
  font-family: ${fonts.montserrat};
  ${mobile({fontSize: "13px"})}
`;

const ContainerTema = styled.div`
  display: flex;
  justify-content: center ;
  flex-direction: row ;
  flex-wrap: wrap ;
  width: 90%;
  ${mobile({marginBottom: "20px", width :"100%"})}
  ${tablet({marginBottom: "50px"})}
`;

const PilihTema = ({page}) => {
  return (
    <Container id={page} >
      <Top>
        <Title>Pilih Tema</Title>
        <Text>
          Diskusikan kepada pasangan anda untuk memilih undangan yang cantik dan
          menarik. Tema kami sudah responsive untuk desktop atau mobile, jadi
          anda tidak perlu kawatir.
        </Text>
      </Top>
      <ContainerTema>
        <CardTemaUndangan namaTema="Blue Flower" />
        <CardTemaUndangan namaTema="Red Flower" />
        <CardTemaUndangan namaTema="Yellow Flower" />
        <CardTemaUndangan namaTema="Purple Flower" />
      </ContainerTema>
    </Container>
  );
};

export default PilihTema;
