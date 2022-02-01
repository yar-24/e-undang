import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { ShopeePay, Bri } from "../assets";
import { FaCopy } from "react-icons/fa";
import { colors, fonts } from "../../../utils";
import Button from "../components/Button";
import { Bounce } from "react-reveal";
import { data } from "../dataUndangan";

const Background = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContainerText = styled.div`
  margin: 50px 25px 20px;
  text-align: center;
  ${mobile({ margin: "15vh 25px 20px" })};
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
  const [Bridone, BrisetDone] = useState(false);
  const [Spdone, SpsetDone] = useState(false);

  return (
    <Background>
      <Bounce bottom cascade>
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

          {data.map((item) => (
            <ContainerCard>
              <Image src={Bri} />
              <Text>No. Rekening : {item.no_amplop_bri}</Text>
              <Hr />
              <Text>A/n {item.atas_nama_bri}</Text>
              <ContainerButton>
                <Button
                  padding={"0px"}
                  width={"150px"}
                  label={(Bridone && "Copy Berhasil") || "Copy Text"}
                  icon={<FaCopy />}
                  onClick={() =>
                    BrisetDone(navigator.clipboard.writeText("4242424242"))
                  }
                />
              </ContainerButton>
            </ContainerCard>
          ))}
          {data.map((item) => (
            <ContainerCard>
              <Image src={ShopeePay} />
              <Text>No. Telp : {item.no_amplop_shpe}</Text>
              <Hr />
              <Text>A/n {item.atas_nama_shpe}</Text>
              <ContainerButton>
                <Button
                  padding={"0px"}
                  width={"150px"}
                  label={(Spdone && "Copy Berhasil") || "Copy Text"}
                  icon={<FaCopy />}
                  onClick={() =>
                    SpsetDone(navigator.clipboard.writeText("085742068498"))
                  }
                />
              </ContainerButton>
            </ContainerCard>
          ))}
        </Container>
      </Bounce>
    </Background>
  );
};

export default Amplop;
