import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../utils";
import { Img4, Background2 } from "../assets/images";
import BingkaiCicle from "../components/BingkaiCicle";
import Jam from "../components/Jam";
import Button from "../components/Button";
import { BsCalendar3 } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";
import { ipon } from "../../../responsive";
import { data } from "../dataUndangan";

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
  ${ipon({ fontSize: "25px" })};
`;

const UtamaTema1 = ({ id }) => {
  return (
    <Background id={id}>
          {data.map((item) => (
      <Container>
        <Zoom>
          <BingkaiCicle mb={5} foto={Img4} />
        </Zoom>
        <ContainerText>
            <Zoom>
              <Text>{item.nama_pasangan}</Text>
            </Zoom>
        </ContainerText>
        <Jam />
          <Button
            width={"250px"}
            label="Simpan Acara Ke Kalender"
            icon={<BsCalendar3 size={30} />}
            link={item.btn_kalender}
          />
      </Container>
        ))}
    </Background>
  );
};

export default UtamaTema1;
