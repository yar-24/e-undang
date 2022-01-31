import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../utils";
import { Img2 } from "../assets/images";
import { Bismillah } from "../assets/images";
import BingkaiCicle from "../components/BingkaiCicle";
import { Img3 } from "../assets/images";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { mobile } from "../../../responsive";

const Background = styled.section`

`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 80%;
  margin-top: 50px;
`;
const Image = styled.img`
  width: 500px;
  ${mobile({ width: "250px" })};
`;
const Salam = styled.h3`
  font-family: ${fonts.secondary};
  color: ${colors.primary};
  font-size: 35px;
  ${mobile({ fontSize: "24px" })};
`;
const Text = styled.p`
  font-weight: 500;
  ${mobile({ fontSize: "15px" })};
`;

const Middle = styled.div``;

const Mempelai = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
`;

const Nama = styled.h3`
  font-family: ${fonts.secondary};
  font-size: 30px;
  margin: 0 0 5px;
`;

const Ortu = styled.p`
  font-family: ${fonts.primary};
  font-size: 15px;
`;

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const WrapperIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  background-color: ${colors.secondary};
  color: black;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: ${colors.primary};
    color: white;
  }
`;

const Profile = ({ foto, id }) => {
  return (
    <Background id={id} >
      <Container>
        <Top>
          <Image src={Bismillah} />
          <Salam>Assalamu’alaikum Wr Wb</Salam>
          <Text>
            Maha suci Allah yang telah menciptakan mahluk-Nya
            berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih
            sayang yang Kau ciptakan diantara kami untuk mengikuti Sunnah
            Rasul-Mu dalam rangka membentuk kelurga yang sakinah, mawaddah,
            warahmah.
          </Text>
        </Top>
        <Middle>
          {/* MEMPELAI CEWE */}

          <Mempelai>
            <BingkaiCicle foto={Img3} />
            <Nama>Juliet Putri</Nama>
            <Ortu>Putri Pertama Bapak Juli & Ibu Putri</Ortu>
            <ContainerIcon>
              <WrapperIcon>
                <FiFacebook />
              </WrapperIcon>
              <WrapperIcon>
                <FiInstagram />
              </WrapperIcon>
            </ContainerIcon>
          </Mempelai>

          {/* MEMPELAI COWO */}

          <Mempelai>
            <BingkaiCicle foto={Img2} />
            <Nama>Romeo Putra</Nama>
            <Ortu>Putra Pertama Bapak Roma & Ibu Saputri</Ortu>
            <ContainerIcon>
              <WrapperIcon>
                <FiFacebook />
              </WrapperIcon>
              <WrapperIcon>
                <FiInstagram />
              </WrapperIcon>
            </ContainerIcon>
          </Mempelai>
        </Middle>
      </Container>
    </Background>
  );
};

export default Profile;
