import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../../../utils";
import { Background2 } from "../../assets";
import { BingkaiTm1, JamTm1, ButtonTm1, JarakTm1 } from "../../components";
import { BsCalendar3 } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";
import { ipon } from "../../../../../responsive";

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
display: flex ;
flex-direction: column ;
justify-content: center ;
align-items: center ;
  text-align: center;
  width: 30%;
`;
const Text = styled.h1`
  font-family: ${fonts.primary};
  font-size: 36px;
  text-transform: capitalize ;
  margin: 0;
  color: ${colors.primary};
  ${ipon({ fontSize: "25px" })};
`;

const KeduaTm1 = ({page, photoBerdua, namaPglCowo, namaPglCewe, linkAlmtAkad, hitungMundur}) => {

  return (
    <Background id={page}>
      <Container >
        <JarakTm1 height={400} />
        <Zoom>
          <BingkaiTm1 mb={5} foto={photoBerdua} />
        </Zoom>
        <ContainerText>
          <Zoom>
            <Text>{namaPglCowo}</Text>
            <h1 style={{margin:0}} >&</h1>
            <Text>{namaPglCewe}</Text>
          </Zoom>
        </ContainerText>
        <JamTm1 jam={hitungMundur} />
        <ButtonTm1
          width={"250px"}
          label="Simpan Acara Ke Kalender"
          icon={<BsCalendar3 size={30} />}
          link={linkAlmtAkad}
        />
      </Container>
    </Background>
  );
};

export default KeduaTm1;
