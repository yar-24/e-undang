import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../../../utils";
import { Background2 } from "../../assets";
import { BingkaiTm1, JamTm1, ButtonTm1, JarakTm1 } from "../../components";
import { BsCalendar3 } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";
import { ipon } from "../../../../../responsive";
import { useSelector } from "react-redux";

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

const KeduaTm1 = ({page}) => {
  const { goals} = useSelector(
    (state) => state.goals
  );

  return (
    <Background id={page}>
    {goals.map((item) => (
      <Container key={item._id}>
        <JarakTm1 height={400} />
        <Zoom>
          <BingkaiTm1 mb={5} foto={item.photoBerdua} />
        </Zoom>
        <ContainerText>
          <Zoom>
            <Text>{item.namaPglCowo}</Text>
            <h1 style={{margin:0}} >&</h1>
            <Text>{item.namaPglCewe}</Text>
          </Zoom>
        </ContainerText>
        <JamTm1 />
        <ButtonTm1
          width={"250px"}
          label="Simpan Acara Ke Kalender"
          icon={<BsCalendar3 size={30} />}
          link={item.linkAlmtAkad}
        />
      </Container>
    ))}
    </Background>
  );
};

export default KeduaTm1;
