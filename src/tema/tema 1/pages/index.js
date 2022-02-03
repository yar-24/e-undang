import React from "react";
import UtamaTema1 from "./UtamaTema1";
import Profile from "./Profile";
import Akad from "./Akad";
import styled from "styled-components";
import { Bingkai, Background5, Asset1 } from "../assets/images";
import Galeri from "./Galeri";
import Music from "../components/Music";
import Lagu from "../assets/music/denny.mp3";
import LiveStream from "./LiveStream";
import Amplop from "./Amplop";
import FormUcapan from "./FormUcapan";
import Pembukaan from "./Pembukaan";
import Navbar from "../components/Navbar";
import { mobile } from "../../../responsive";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import { animationTwo } from "../../../animations";

const Background = styled.div`
  background-image: url(${Bingkai});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundSambung = styled.div`
  background-image: url(${Background5});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 100%;
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  width: 80%;
  margin-left: 10vw;
  margin-top: 25vh;
  ${mobile({ marginTop: 0 })};
`;

const index = () => {
  return (
    <>
      <Background>
      <Pembukaan />
        <Navbar />
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={animationTwo}
        >
          <Music url={Lagu} />
          <UtamaTema1 id="home" />
          <Profile id="profile" />
          <Akad />
          <Galeri id="galeri" />
          <BackgroundSambung>
            <LiveStream />
            <Fade left>
              <Image src={Asset1} />
            </Fade>
            <Amplop />
            <Fade left>
              <Image src={Asset1} />
            </Fade>
            <FormUcapan id="ucapan" />
          </BackgroundSambung>
        </motion.div>
      </Background>
    </>
  );
};

export default index;
