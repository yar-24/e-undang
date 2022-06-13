import React from "react";
import styled from "styled-components";
import { colors, fonts, mobile } from "../../../utils";
import NumberCounter from "number-counter";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  width: 100% ;
  max-width: 1440px ;
 background: ${colors.pinkBgSecondary} ;
  ${mobile({ flexDirection: "column",height: "100%", padding: "10px 0 10px"})}
`;

const Left = styled.div`
  width: 50%;
  margin-left: 7vw;
  ${mobile({ width: "90%", marginLeft: "0" })}
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: ${fonts.montserrat};
  ${mobile({ fontSize: "20px", textAlign: "center" })}
`;

const Text = styled.p`
  font-family: ${fonts.montserrat};
  ${mobile({ fontSize: "13px", textAlign: "center" })}
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  ${mobile({ width: "90%", margin: "10px" })}
`;

const ContainerAngka = styled.div`
  display: flex;
  height: 100px ;
  ${mobile({ width: "100%", justifyContent: "center", alignItems: "center" })}
`;

const Angka = styled(NumberCounter)`
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  ${mobile({ fontSize: "25px" })}
`;

const TextRight = styled.p`
  margin: 10px 0 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 10px;
`;

const Hr = styled.hr`
  height: 80%;
  width: 3px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.btnSecondary};
`;

const Pengguna = () => {
  return (
    <Container>
      <Left>
        <Title>E-Undang sudah dipercaya lebih dari :</Title>
        <Text>
          kami mempunyai tujuan yaitu memudahkan Anda membuat undangan online
          dengan cepat.
        </Text>
      </Left>
      <Right>
        <ContainerAngka>
          <Hr />
          <Wrapper>
            <Angka end={500} delay={1} postFix="+" />
            <TextRight>Pengguna</TextRight>
          </Wrapper>
        </ContainerAngka>
        <ContainerAngka>
          <Hr />
          <Wrapper>
            <Angka end={700} delay={1} postFix="+" />
            <TextRight>Undangan</TextRight>
          </Wrapper>
        </ContainerAngka>
        <ContainerAngka>
          <Hr />
          <Wrapper>
            <Angka end={5} delay={4} postFix="+" />
            <TextRight>Tema Pilihan</TextRight>
          </Wrapper>
        </ContainerAngka>
      </Right>
    </Container>
  );
};

export default Pengguna;
