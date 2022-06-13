import React from "react";
import styled from "styled-components";
import {IconFree, IconCepat, IconMudah } from "../../../img";
import {colors, fonts, tablet, mobile } from "../../../utils";

const BackgroundKelebihan = styled.div`
 background: ${colors.pinkBgPrimary} ;
  width: 100%;
  height: 100vh;
  max-width: 1440px ;
  max-height: 600px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px;
  ${mobile({ height: "100%" })}
  ${tablet({ height: "100%" })}
`;

const Top = styled.div`
  width: 50%;
  margin-bottom: 70px;
  text-align: center;
  ${mobile({ width: "90%", marginBottom: "10px" })}
  ${tablet({ marginBottom: "20px" })}
`;

const Title = styled.h1`
  font-family: ${fonts.montserrat};
  ${mobile({ fontSize: "20px" })}
`;

const Text = styled.p`
  font-family: ${fonts.montserrat};
  font-size: 18px;
  ${mobile({ fontSize: "13px" })}
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "row", justifyContent: "center" })}
  ${tablet({
    justifyContent: "center",
    alignItems: "center",
  })}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 300px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #edeaea;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 30px;
  padding: 20px;
  ${mobile({
    justifyContent: "center",
    padding: "10px",
    margin: "10px",
    width: "220px",
    height: "100%",
  })}
  ${tablet({margin: "20px"})}
`;

const ContainerIcon = styled.div`
  width: 90px;
  height: 90px;
  background: rgba(255, 251, 251, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const Icon = styled.img`
  ${mobile({ width: "45px", height: "45px" })}
`;

const TitleCard = styled.p`
font-family: ${fonts.montserrat};
  font-weight: 700;
  font-size: 23px ;
  margin: 10px ;
  ${mobile({ fontSize: "15px"})}
`

const TextCard = styled.p`
  font-family: ${fonts.montserrat};
  font-weight: 500;
  text-align: center ;
  ${mobile({ fontSize: "13px" })}
`;

const Kelebihan = () => {
  return (
      <BackgroundKelebihan>
        <Top>
          <Title>Kelebihan E-Undang</Title>
          <Text>
            Kami menghadirkan sebuah solusi untuk membantu kalian yang ingin
            untuk membuat undangan online dengan cepat dan mudah
          </Text>
        </Top>
        <ContainerCard>
          <Card>
            <ContainerIcon>
              <Icon src={IconFree} />
            </ContainerIcon>
            <TitleCard>Gratis</TitleCard>
            <TextCard>
              Membuat undangan website bebas biaya dengan fitur yang lengkap.
            </TextCard>
          </Card>
          <Card>
            <ContainerIcon>
              <Icon src={IconCepat} />
            </ContainerIcon>
            <TitleCard>Cepat</TitleCard>
            <TextCard>
              Hanya dalam hitungan beberapa detik undangan website anda langsung
              siap disebarkan.
            </TextCard>
          </Card>
          <Card>
            <ContainerIcon>
              <Icon src={IconMudah} />
            </ContainerIcon>
            <TitleCard>Mudah</TitleCard>
            <TextCard>
              Sangat mudah sekali dalam pembuatannya, hanya tinggal kalian
              upload data yang diperlukan, maka undangan siap digunakan.
            </TextCard>
          </Card>
        </ContainerCard>
      </BackgroundKelebihan>
  );
};

export default Kelebihan;
