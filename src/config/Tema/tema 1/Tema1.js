import React, { useEffect, useState } from "react";
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
import { Bingkai, Background5, Asset1, Lagu } from "./assets";
import { mobile } from "../../../responsive";
import { Fade } from "react-reveal";
import { MusicTm1, NavbarTm1 } from "./components";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Background = styled.div`
  background-image: url(${Bingkai});
  background-repeat: no-repeat;
  background-size: cover;
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

const Tema1 = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:4000/api/post/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [id]);

  return (
    <Background>
      <KesatuTm1 nama={data.nama} />
      <NavbarTm1 />
      <MusicTm1 url={Lagu} />
      <KeduaTm1 page="home" />
      <KetigaTm1 page="profile" />
      <KeempatTm1 />
      <KelimaTm1 page="galeri" />;
      <BackgroundSambung>
        <KeenamTm1 />
        <Fade left>
          <Image src={Asset1} />
        </Fade>
        <KetujuhTm1 />
        <Fade left>
          <Image src={Asset1} />
        </Fade>
        <KedelapanTm1 page="ucapan" />
      </BackgroundSambung>
    </Background>
  );
};

export default Tema1;
