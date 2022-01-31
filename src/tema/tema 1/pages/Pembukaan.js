import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { colors } from "../../../utils";
import BingkaiCicle from "../components/BingkaiCicle";
import Partikel from "../components/Partikel";
import { Img4, Background3 } from "../assets/images";

const Background = styled.div`
background-image: url(${Background3});
  background-origin: border-box;
  background-size: cover;
  background-position: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  ${mobile({ height: "100vh" })};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;
  ${mobile({ width: "100%", marginBottom: 0 })};
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${colors.white};
`;

const NamaMempelai = styled.h1`
  color: ${colors.secondary};
  font-family: "Abril Fatface", cursive;
  font-size: 46px;
`;

const Kepada = styled.h3`
  margin: 0px 0px 0px;
`;

const NamaTamu = styled.h1`
  color: ${colors.secondary};
  font-family: "Abril Fatface", cursive;
  font-size: 36px;
`;

const NamaLain = styled.h3`
  margin: 0px 0px 0px;
`;

const Text = styled.p``;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;

  :hover {
    background-color: ${colors.secondary};
    color: black;
  }
`;

const Pembukaan = () => {
  let { username } = useParams();

  return (
      <Background>
        <Partikel />
        <Container>
          <BingkaiCicle mb={-30} foto={Img4} />
          <ContainerText>
            <NamaMempelai>Romeo & Juliet</NamaMempelai>
            <Kepada>Kepada</Kepada>
            <NamaTamu>{username}</NamaTamu>
            <NamaLain>Bapak/Ibu/Saudara/i</NamaLain>
            <Text>
              kami mengundang Anda Untuk Hadir Di Acara Pernikahan Kami
            </Text>
          </ContainerText>
          <Link style={{ textDecoration: "none" }} to="/contoh-tema-1">
            <Button >
            Buka Undangan
            </Button>
          </Link>
        </Container>
      </Background>

  );
};

export default Pembukaan;
