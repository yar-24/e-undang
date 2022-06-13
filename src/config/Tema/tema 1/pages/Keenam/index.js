import React from "react";
import styled from "styled-components";
import { ButtonTm1 } from "../../components";
import { BsCameraVideoFill } from "react-icons/bs";
import { Instagram, Yt, Draw, Background5 } from "../../assets";
import { ipon, mobile } from "../../../../../responsive";
import { colors, fonts } from "../../../../../utils";
import { Bounce } from "react-reveal";
import { useSelector } from "react-redux";

const Background = styled.div`
  /* background-image: url(${Background5});
  background-origin: border-box;
  background-size: cover;
  background-position: 100%;
  padding-bottom: 150px;
  width: 100%;
  height: 100vh;
  ${mobile({ paddingBottom: "20px" })};
  ${ipon({ height: "130vh" })}; */
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
  ${mobile({
    width: "80%",
    paddingBottom: "0",
    height: "25vh",
    marginBottom: "20px",
  })};
  ${ipon({ height: "35vh" })};
`;
const TitleLive = styled.h2`
  font-family: ${fonts.secondary};
  color: ${colors.primary};
`;
const Image = styled.img`
  margin: 10px 0 10px;
`;

const KeenamTm1 = () => {

  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  return (
    <Background>
      {goals.map((item) => (
        <Bounce bottom cascade key={item._id}>
          <Container>
            <ContainerText>
              <Title>Live Streaming</Title>
              <Text>
                kami mengundang Bapa/Ibu/Saudara/i untuk menyaksikan Pernikahan
                kami secara Virtual yang disiarkan langsing melalui Sosial media
                dibawah ini
              </Text>
            </ContainerText>
            <ContainerLive>
              <TitleLive>Intagram</TitleLive>
              <Image src={Instagram} />
              <ButtonTm1
                padding={"0px"}
                width={"150px"}
                label="Klik Disini"
                icon={<BsCameraVideoFill />}
                link={item.linkLive}
              />
            </ContainerLive>

            <Image src={Draw} />
            <ContainerLive>
              <TitleLive>Youtube</TitleLive>
              <Image src={Yt} />
              <ButtonTm1
                padding={"0px"}
                width={"150px"}
                label="Klik Disini"
                icon={<BsCameraVideoFill />}
                link={item.linkLive}
              />
            </ContainerLive>
          </Container>
        </Bounce>
      ))}
    </Background>
  );
};

export default KeenamTm1;
