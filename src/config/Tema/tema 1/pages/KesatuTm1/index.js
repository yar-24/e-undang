import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../../../../responsive";
import { colors } from "../../../../../utils";
import { Partikel } from "../../../../../componentsApp";
import "./kesatuTm1.css";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({ width: "100%", marginBottom: 0 })};
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 100%;
  height: 100%;
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
  text-transform: capitalize ;
  margin: 0;
  ${mobile({ fontSize: "28px" })};
`;

const Kepada = styled.h3`
  margin: 10px 0px 0px;
`;

const NamaTamu = styled.h1`
  color: ${colors.secondary};
  font-family: "Abril Fatface", cursive;
  font-size: 36px;
  text-transform: capitalize ;
  ${mobile({ fontSize: "24px" })};
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

const KesatuTm1 = () => {
  const [pembukaan, setPembukaan] = useState(false);
  let { namaTamu } = useParams();

  const { goals} = useSelector(
    (state) => state.goals
  );

  return (
    <div className={pembukaan ? "pembukaan" : "pembukaan open"}>
      <Partikel />
      {goals.map((item) => (
        <Container key={item._id}>
          <ContainerText>
            <NamaMempelai>{item.namaPglCowo}</NamaMempelai>
            <h1 style={{ margin: 0 }}>&</h1>
            <NamaMempelai>{item.namaPglCewe}</NamaMempelai>
            <Kepada>Kepada</Kepada>
            <NamaTamu>{namaTamu}</NamaTamu>
            <NamaLain>Bapak/Ibu/Saudara/i</NamaLain>
            <Text>
              kami mengundang Anda Untuk Hadir Di Acara Pernikahan Kami
            </Text>
            <Button onClick={() => setPembukaan(true)}>Buka Undangan</Button>
          </ContainerText>
        </Container>
      ))}
    </div>
  );
};

export default KesatuTm1;
