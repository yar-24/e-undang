import React from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { colors, fonts } from "../../../utils";
import { Img4, Background2 } from "../assets/images";
import BingkaiCicle from "../components/BingkaiCicle";
import Jam from "../components/Jam";
import Button from "../components/Button";
import { BsCalendar3 } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";

const Background = styled.section`
  background-image: url(${Background2});
  background-origin: border-box;
  background-size: cover;
  background-position: 100%;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ContainerText = styled.div`
  text-align: center;
  width: 30%;
`;
const Text = styled.h1`
  font-family: ${fonts.primary};
  font-size: 36px;
  color: ${colors.primary};
  ${mobile({ marginBottom: "-5vh" })};
`;

const UtamaTema1 = ({ id }) => {
  return (
    <Background id={id}>
      <Container>
        <Zoom>
          <BingkaiCicle mb={5} foto={Img4} />
        </Zoom>
        <ContainerText>
          <Zoom>
            <Text>Romeo & Juliet</Text>
          </Zoom>
        </ContainerText>
        <Jam />
        <Button
          width={"250px"}
          label="Simpan Acara Ke Kalender"
          icon={<BsCalendar3 size={30} />}
          link="https://calendar.google.com/event?action=TEMPLATE&tmeid=M3JxODhvNGlhZTVqbW1tOGY2NW5qb2RlZTUgeWFyZWFwazI0QG0&tmsrc=yareapk24%40gmail.com"
        />
      </Container>
    </Background>
  );
};

export default UtamaTema1;
