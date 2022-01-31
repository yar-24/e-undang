import React from "react";
import styled from "styled-components";
import { Img4, Awan, Bunga1 } from "../assets/images";
import Button from "../components/Button";
import { SiGooglemaps } from "react-icons/si";
import { colors, fonts } from "../../../utils";
import { mobile } from "../../../responsive";
import { Fade } from "react-reveal";

const Background = styled.div`
  padding-top: 30px;
`;
const ImgBunga = styled.img`
  position: absolute;
  width: auto;
  z-index: 5;
  ${mobile({ width: "100%" })};
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  margin-top: 100px;
  margin-bottom: 50vh;
  ${mobile({ height: "224px", marginBottom: "100px" })};
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
`;
const Tanggal = styled.h3`
  font-family: ${fonts.primary};
`;
const Pukul = styled.p``;
const Alamat = styled.p``;

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

const Akad = () => {
  return (
    <Background>
      <Fade left>
        <ImgBunga src={Bunga1} />
      </Fade>
      <Image src={Img4} />
      <Container>
        <ContainerAkad>
          <AkadNikah>
            <Title>Akad Nikah</Title>
            <Tanggal>11 November 2025</Tanggal>
            <Pukul>Pukul 10:00</Pukul>
            <Alamat>
              Alamat : Ds Konohagakure Kec. Konoha Kab. Negara Api
            </Alamat>
          </AkadNikah>
          <AkadNikah>
            <Title>Resepsi nikah</Title>
            <Tanggal>11 November 2025</Tanggal>
            <Pukul>Pukul 10:00</Pukul>
            <Alamat>
              Alamat : Ds Konohagakure Kec. Konoha Kab. Negara Api
            </Alamat>
          </AkadNikah>
        </ContainerAkad>
        <Button width={"250px"} label="Kunjungi Lokasi Via Gmaps" icon={<SiGooglemaps />} link="https://goo.gl/maps/AteGNbZYT6zuuXn5A" />

      </Container>
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

export default Akad;
