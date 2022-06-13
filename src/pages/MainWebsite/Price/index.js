import React from "react";
import styled from "styled-components";
import {CardHarga} from "../../../componentsApp";
import { colors, mobile } from "../../../utils";

const ContainerBg = styled.div`
background: ${colors.pinkBgPrimary} ;
  width: 100%;
  height: 100%;
  max-width: 1440px ;
  max-height: 1000px ;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Glasses = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.4px);
  -webkit-backdrop-filter: blur(9.4px);
  border: 1px solid rgba(255, 255, 255, 0.24);
  height: 80%;
  width: 80%;
  padding: 20px;
  margin: 50px 0 50px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({margin: "20px 0px 20px"})}
`;

const Title = styled.h1`
  text-align: center;
  ${mobile({fontSize: "20px"})}
`;


const Price = ({page}) => {
  return (
    <ContainerBg id={page} >
      <Glasses>
        <Title>Paket Harga</Title>
        <CardHarga/>
      </Glasses>
    </ContainerBg>
  );
};

export default Price;
