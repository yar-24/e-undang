import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { colors } from "../../../utils";
import Partikel from "../components/Partikel";
import { data } from "../dataUndangan";
import "./pembukaan.css";

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
  margin-top: 20vh;
  padding: 20px;
  margin-bottom: 20px;
  color: ${colors.white};
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
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
  const [model, setModel] = useState(false);
  let { username } = useParams();

  return (
    <div className={model ? "model" : "model open"}>
      <Partikel />
      <Container>
        <ContainerText>
          {data.map((item) => (
            <NamaMempelai>{item.nama_pasangan}</NamaMempelai>
          ))}
          <Kepada>Kepada</Kepada>
          <NamaTamu>{username}</NamaTamu>
          <NamaLain>Bapak/Ibu/Saudara/i</NamaLain>
          <Text>kami mengundang Anda Untuk Hadir Di Acara Pernikahan Kami</Text>
        </ContainerText>
        <Button onClick={() => setModel(true)}>Buka Undangan</Button>
      </Container>
    </div>
  );
};

export default Pembukaan;
