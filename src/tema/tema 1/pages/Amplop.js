import React from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { ShopeePay, Bri, Background5 } from "../assets";
import { FaCopy } from "react-icons/fa";
import { colors, fonts } from "../../../utils";
import Button from "../components/Button";

const Background = styled.div`
  background-image: url(${Background5});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 100%;
  width: 100%;
  height: 100vh;
  padding-bottom: 300px;
  ${mobile({ paddingBottom: "200px" })};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContainerText = styled.div`
  margin: 50px 25px 20px;
  text-align: center;
  ${mobile({ margin: "10vh 25px 20px" })};
`;
const Title = styled.h1`
  font-family: ${fonts.secondary};
  color: ${colors.primary};
`;
const Text = styled.p``;

const Hr = styled.hr`
  width: 280px;
  height: 2px;
  background-color: ${colors.primary};
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30%;
  height: 70%;
  background: rgba(255, 255, 255, 0.83);
  filter: drop-shadow(0px 11px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  ${mobile({
    width: "300px",
    height: "300px",
    paddingBottom: 0,
    marginBottom: "20px",
  })};
`;

const Image = styled.img`
  margin: 20px 0 10px;
`;

const ContainerButton = styled.div``;

const Amplop = () => {

  return (
    <Background>
      <Container>
        <ContainerText>
          <Title>Amplop Digital</Title>
          <Text>
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
          </Text>
          <Text>
            Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat
            memberi kado secara cashless dengan mengirim amplop digital secara
            transfer pada akun di bawah ini :
          </Text>
        </ContainerText>
        <ContainerCard>
          <Image src={Bri} />
          <Text> 
            No. Rekening : 42424242
          </Text>
          <Hr />
          <Text>A/n Romeo Ramadhan</Text>
          <ContainerButton>
            <Button
              padding={"0px"}
              width={"150px"}
              label="Copy Text"
              icon={<FaCopy />}
              onClick={() => navigator.clipboard.writeText('4242424242')}
            />
          </ContainerButton>
        </ContainerCard>
        <ContainerCard>
          <Image src={ShopeePay} />
          <Text>
            No. Telp : 085742068498
          </Text>
          <Hr />
          <Text>A/n Romeo Ramadhan</Text>
          <ContainerButton>
            <Button
              padding={"0px"}
              width={"150px"}
              label="Copy Text"
              icon={<FaCopy />}
              onClick={() => navigator.clipboard.writeText('085742068498')}
            />
          </ContainerButton>
        </ContainerCard>
      </Container>
    </Background>
  );
};

export default Amplop;
