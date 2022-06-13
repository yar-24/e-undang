import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import {fonts, mobile } from "../../../utils";
import { BtnBuatUndangan, Jarak } from "../../kecil";

const Container = styled.div`
  ${mobile({ marginTop: 0 })}
`;

//Container Card

const ContainerCard = styled.div`
  height: 100%;
  width: 100%;
  ${mobile({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  })}
`;

const Title = styled.h1`
  font-family: ${fonts.montserrat};
  font-size: 45px;
  line-height: 60px;
  ${mobile({ fontSize: "25px", textAlign: "center", lineHeight: "30px" })}
`;

const Text = styled.p`
  font-family: ${fonts.montserrat};
  font-size: 20px;
  font-weight: 600;
  color: rgba(149, 149, 149, 1);
  letter-spacing: 2px;
  line-height: 40px;
  ${mobile({ fontSize: "13px", textAlign: "center", lineHeight: "20px" })}
`;

const ContainerBtn = styled.div`
  text-decoration: none;
`;

const LeftHomePage = ({dashboard}) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  const login = () => {
    navigate('/login')
  }

  return (
      <Container>
        <ContainerCard>
          <Title>Udangan Website Online Gratis!</Title>
          <Text>
            Kami menyediakan banyak tema pilihan hanya ada di E-Undang. Buat
            Undangan Kalian lebih menarik dan mudah hanyak butuh waktu 1 menit
            Website Undangan Kamu Siap dibagikan.
          </Text>
          <Jarak height={10} />
          {user ? (
            <ContainerBtn onClick={dashboard}>
              <BtnBuatUndangan label="Pengaturan Undangan" />
            </ContainerBtn>
          ) : (
            <ContainerBtn onClick={login}>
              <BtnBuatUndangan label="Buat Undangan" />
            </ContainerBtn>
          )}
          <Jarak height={10} />
        </ContainerCard>
      </Container>
  );
};

export default LeftHomePage;
