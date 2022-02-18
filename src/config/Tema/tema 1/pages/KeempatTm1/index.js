import React from "react";
import styled from "styled-components";
import { Img4, Awan, Bunga1 } from '../../assets';
import {ButtonTm1} from '../../components';
import { SiGooglemaps } from "react-icons/si";
import { colors, fonts } from '../../../../../utils';
import { ipon, mobile } from '../../../../../responsive';
import { Bounce, Fade } from "react-reveal";

const Background = styled.div``;
const ImgBunga = styled.img`
  position: absolute;
  width: auto;
  z-index: 5;
  ${mobile({ width: "70%" })};
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  margin-bottom: 50vh;
  ${mobile({ height: "224px", marginBottom: "100px" })};
  ${ipon({ marginBottom: "50px" })};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({ height: "100vh" })};
`;

const ContainerAkad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30%;
  height: 70%;
  z-index: 3;
  margin-bottom: 500px;
  ${mobile({ width: "300px", height: "150px", marginBottom: "700px" })};
  ${ipon({ width: "250px", height: "100px", marginBottom: "600px" })};
`;

const AkadNikah = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.83);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 0 10px 0;
  width: 100%;
  height: 30vh;
`;
const Title = styled.h1`
  font-family: ${fonts.secondary};
  color: ${colors.primary};
  ${ipon({ fontSize: "25px" })};
`;
const Tanggal = styled.h3`
  font-family: ${fonts.primary};
  ${ipon({ fontSize: "15px" })};
`;
const Pukul = styled.p`
  ${ipon({ fontSize: "10px" })};
`;
const Alamat = styled.p`
  ${ipon({ fontSize: "10px" })};
`;

const BAwan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Awan});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 20px;
  ${mobile({ marginTop: "-400px", height: "27vh" })};
  ${ipon({ marginTop: "-300px" })};
`;

const CountainerText = styled.div`
  width: 50%;
  padding-top: 25vh;
  margin: 20px;
  text-align: center;
  color: white;
  ${mobile({ width: "80%", paddingTop: "20px" })};
`;

const Text = styled.p`
  ${mobile({ fontSize: "12px" })};
`;

const Surat = styled.p`
  ${mobile({ fontSize: "12px" })};
`;

const KeempatTm1 = (props) => {

  const {tglAkad, jamAkad, almtAkad, tglResepsi, jamResepsi, almtResepsi, linkGmaps} = props

  return (
    <Background>
      <Fade left>
        <ImgBunga src={Bunga1} />
      </Fade>
      <Image src={Img4} />
        <Bounce bottom cascade>
          <Container>
            <ContainerAkad>
              <AkadNikah>
                <Title>Akad Nikah</Title>
                <Tanggal>{tglAkad}</Tanggal>
                <Pukul>Pukul {jamAkad}</Pukul>
                <Alamat>
                  Alamat : {almtAkad}
                </Alamat>
              </AkadNikah>
              <AkadNikah>
                <Title>Resepsi nikah</Title>
                <Tanggal>{tglResepsi}</Tanggal>
                <Pukul>Pukul {jamResepsi}</Pukul>
                <Alamat>
                  Alamat : {almtResepsi}
                </Alamat>
              </AkadNikah>
            </ContainerAkad>
            <ButtonTm1
              width={"250px"}
              label="Kunjungi Lokasi Via Gmaps"
              icon={<SiGooglemaps />}
              link={linkGmaps}
            />
          </Container>
        </Bounce>
      <BAwan>
        <CountainerText>
          <Text>
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan jadikan-Nya diantaramu rasa kasih
            dan sayang. Sesungguhnya pada yang demikian itu benar-brnar terdapat
            tanda-tanda bagi kamu yang berfikir."
          </Text>
          <Surat>(Q.S AR RUM : 21)</Surat>
        </CountainerText>
      </BAwan>
    </Background>
  );
};

export default KeempatTm1;
