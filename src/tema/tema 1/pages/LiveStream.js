import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import {BsCameraVideoFill} from 'react-icons/bs'
import {Instagram, Yt, Draw, Background5} from '../assets'
import { mobile } from "../../../responsive";
import { colors, fonts } from "../../../utils";

const Background = styled.div`
background-image: url(${Background5});
  background-origin: border-box;
  background-size: cover;
  background-position: 100%;
  padding-bottom: 150px;
  width: 100%;
  height: 100vh;
  ${mobile({ paddingBottom: "20px" })};
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
  ${mobile({ margin : "10vh 25px 20px" })};
`;
const Title = styled.h1`
    font-family: ${fonts.secondary};
    color: ${colors.primary};
`;
const Text = styled.p``;
const ContainerLive = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  width: 30%;
  height: 70%;
  background: rgba(255, 255, 255, 0.83);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding-bottom: 20px;
  ${mobile({ width: "80%", paddingBottom: "0", height: "25vh", marginBottom: "20px"})};
`;
const TitleLive = styled.h2`
    font-family: ${fonts.secondary};
    color: ${colors.primary};
`;
const Image = styled.img`
    margin: 10px 0 10px;
`;

const LiveStream = () => {
  return (
    <Background>
      <Container>
        <ContainerText>
          <Title>Live Streaming</Title>
          <Text>
            kami mengundang Bapa/Ibu/Saudara/i untuk menyaksikan Pernikahan kami
            secara Virtual yang disiarkan langsing melalui Sosial media dibawah
            ini
          </Text>
        </ContainerText>
          <ContainerLive>
            <TitleLive>Intagram</TitleLive>
            <Image src={Instagram} />
            <Button padding={"0px"} width={"150px"} label="Klik Disini" icon={<BsCameraVideoFill/>} link="https://instagram.com/artyardhan?utm_medium=copy_link"/>
          </ContainerLive>
          <Image src={Draw}/>
          <ContainerLive>
            <TitleLive>Youtube</TitleLive>
            <Image src={Yt} />
            <Button padding={"0px"} width={"150px"} label="Klik Disini" icon={<BsCameraVideoFill/> } link="https://youtube.com/channel/UCtJ9lY89-ZTYR9RNBhpLH6g" />
          </ContainerLive>
      </Container>
    </Background>
  );
};

export default LiveStream;
