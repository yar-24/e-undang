import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mobile } from '../../../../../responsive';
import { colors, fonts } from  '../../../../../utils';
import { Pita, Border } from "../../assets";
import "./pertamaTm2.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  position: absolute;

  ${mobile({ width: "100%", borderRadius: "0", marginTop: 0 })};
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 70vh;
  width: 25vw;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  ${mobile({ width: "70%", height: "40%" })};
`;

const Kepada = styled.h2`
  font-family: ${fonts.fontTema2};
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 54px;
  ${mobile({ fontSize: "20px", lineHeight: 0, marginTop: "50px" })};
`;

const Penerima = styled.h1`
  font-family: ${fonts.fontRoboto};
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  ${mobile({ fontSize: "30px", lineHeight: 0 })}
`;

const Text = styled.p`
  font-family: ${fonts.fontRoboto};
`;

const ContainerButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${colors.pinkGelap};
  cursor: pointer;
  transform: height 1s;
  ${mobile({ marginTop: "20px" })};
  :hover {
    height: 90px;
  }
`;

const IconBtn = styled.img`
  ${mobile({ height: "25px", width: "25px", marginTop: "-10px" })}
`;

const TextBtn = styled.p`
  background-color: red;
  font-family: ${fonts.fontRoboto};
  ${mobile({ fontSize: "12px" })}
`;

const PertamaTm2 = () => {
  const [pertamaTM2, setPertamaTM2] = useState(false);
  let { username } = useParams();

  return (
    <div className={pertamaTM2 ? "pertamaTM2" : "pertamaTM2 open"}>
      <Container>
        <Image src={Border} />
        <ContainerText>
          <Kepada>Kepada Yth. Bapak/Ibu/Saudara</Kepada>
          <Penerima>{username}</Penerima>
          <Text>kami mengundang Anda Untuk Hadir Di Acara Pernikahan Kami</Text>
          <ContainerButton onClick={() => setPertamaTM2(true)}>
            <IconBtn src={Pita} />
            <TextBtn>Buka Undangan</TextBtn>
          </ContainerButton>
        </ContainerText>
      </Container>
    </div>
  );
};

export default PertamaTm2;
