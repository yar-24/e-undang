import React, { useEffect } from "react";
import {
  KesatuTm1,
  KeduaTm1,
  KetigaTm1,
  KeempatTm1,
  KelimaTm1,
  KeenamTm1,
  KetujuhTm1,
  KedelapanTm1,
} from "./pages";
import styled from "styled-components";
import { Bingkai, Background5, Asset1 } from "./assets";
import { mobile } from "../../../responsive";
import { Fade } from "react-reveal";
import { MusikTm1, NavbarTm1 } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { getGoals } from "../../redux/features/goals/goalSlice";
import { Loading } from "../../../componentsApp";


const Background = styled.div`
  background-image: url(${Bingkai});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center ;
  align-items: center;
  max-width: 1440px ;
`;

const BackgroundSambung = styled.div`
  background-image: url(${Background5});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 100%;
  width: 100%;
  padding-bottom: 5rem;
`;

const Image = styled.img`
  position: absolute;
  width: 80%;
  margin-left: 10vw;
  margin-top: 25vh;
  ${mobile({ marginTop: 0 })};
`;

const Tema1 = () => {
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getGoals());
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Loading type={"balls"} color={"#FFFFFF"} height={"20%"} width={"20%"} />;
  }

  return (
    <>
      {goals.map((item) => (
        <Background key={item._id}>
          <KesatuTm1 />
          <NavbarTm1 />
          <MusikTm1 music={item.music} />
          {/* <MusicTm1 url={data.music} /> */}
          <KeduaTm1 page="home" />
          <KetigaTm1 page="profile" />
          <KeempatTm1 />
          <KelimaTm1 page="galeri" files={item.files} idYt={item.idYT} />
          <BackgroundSambung>
            <KeenamTm1 />
            <Fade left>
              <Image src={Asset1} />
            </Fade>
            <KetujuhTm1/>
            <Fade left>
              <Image src={Asset1} />
            </Fade>
            <KedelapanTm1 page="ucapan" />
          </BackgroundSambung>
        </Background>
      ))}
    </>
  );
};

export default Tema1;
