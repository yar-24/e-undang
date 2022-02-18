import React, {useState } from "react";
import styled from "styled-components";
import { mobile } from '../../../../../responsive';
import { ShopeePay, Bri } from '../../assets';
import { FaCopy } from "react-icons/fa";
import { colors, fonts } from '../../../../../utils';
import {ButtonTm1} from '../../components';
import { Bounce } from "react-reveal";

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

const KetujuhTm1 = (props) => {
  const [Bridone, BrisetDone] = useState(false);
  const [Spdone, SpsetDone] = useState(false);

  const {noBank, anBank, noTlpShoppe, anShoppe} = props

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

            <ContainerCard>
              <Image src={Bri} />
              <Text>No. Rekening : {noBank}</Text>
              <Hr />
              <Text>A/n {anBank}</Text>
              <ContainerButton>
                <ButtonTm1
                  padding={"0px"}
                  width={"150px"}
                  label={(Bridone && "Copy Berhasil") || "Copy Text"}
                  icon={<FaCopy />}
                  onClick={() =>
                    BrisetDone(navigator.clipboard.writeText({noBank}))
                  }
                />
              </ContainerButton>
            </ContainerCard>
  
            <ContainerCard>
              <Image src={ShopeePay} />
              <Text>No. Telp : {noTlpShoppe}</Text>
              <Hr />
              <Text>A/n {anShoppe}</Text>
              <ContainerButton>
                <ButtonTm1
                  padding={"0px"}
                  width={"150px"}
                  label={(Spdone && "Copy Berhasil") || "Copy Text"}
                  icon={<FaCopy />}
                  onClick={() =>
                    SpsetDone(navigator.clipboard.writeText({noTlpShoppe}))
                  }
                />
              </ContainerButton>
            </ContainerCard>
        </Container>
      </Bounce>
    </Background>
  );
};

export default KetujuhTm1;
