import React from "react";
import { Bounce } from "react-reveal";
import YouTube from "react-youtube";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { colors, fonts } from "../../../utils";
import { Background } from "../assets/images";
import Foto from "../components/Foto";

const Container = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({ marginTop: "-10px" })};
`;
const Text = styled.h1`
  font-family: ${fonts.secondary};
  color: ${colors.primary};
  margin: 50px 0 50px;
  font-size: 35px;
  ${mobile({ margin: "20px 0 20px", fontSize: "30px" })};
`;
const ContainerFoto = styled.div`
  height: 100vh;
  overflow: auto;
  margin: 10px;
  padding: 10px;
  ${mobile({ height: "50vh" })};
`;

const Galeri = ({ id }) => {
  const opts = {
    height: "200",
    width: "330",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <Container id={id}>
      <Text>Galeri Kami</Text>
      <ContainerFoto>
        <Foto />
      </ContainerFoto>
      <Bounce left>
        <YouTube videoId="MsntDa_6TQw" opts={opts} />
      </Bounce>
    </Container>
  );
};

export default Galeri;
