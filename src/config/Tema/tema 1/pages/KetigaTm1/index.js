import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../../../utils";
import { Bismillah, Bingkai } from "../../assets";
import { BingkaiTm1 } from "../../components";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { mobile } from "../../../../../responsive";
import { Fade } from "react-reveal";
import { useSelector } from "react-redux";

const Background = styled.section`
  background-image: url(${Bingkai});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 100%;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
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
  text-transform: capitalize;
  margin: 0 0 5px;
`;

const Ortu = styled.p`
  font-family: ${fonts.primary};
  font-size: 15px;
  text-transform: capitalize;
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

const KetigaTm1 = (props) => {
  const {
    page,
    photoCewe,
    namaLkpCewe,
    urutanAnakCewe,
    namaAyahCewe,
    namaIbuCewe,
    linkFBCewe,
    linkIGCewe,
    photoCowo,
    namaLkpCowo,
    urutanAnakCowo,
    namaAyahCowo,
    namaIbuCowo,
    linkIGCowo,
    linkFBCowo,
  } = props;

  return (
    <Background id={page}>
      <Container>
        <Top>
          <Fade bottom>
            <Image src={Bismillah} />
            <Salam>Assalamu’alaikum Wr Wb</Salam>
            <Text>
              Maha suci Allah yang telah menciptakan mahluk-Nya
              berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai kasih
              sayang yang Kau ciptakan diantara kami untuk mengikuti Sunnah
              Rasul-Mu dalam rangka membentuk kelurga yang sakinah, mawaddah,
              warahmah.
            </Text>
          </Fade>
        </Top>
        <Middle>
          {/* MEMPELAI CEWE */}

          <Mempelai>
            <BingkaiTm1 foto={photoCewe} />
            <Nama>{namaLkpCewe}</Nama>
            <Ortu>
              {urutanAnakCewe} Bapak {namaAyahCewe} & Ibu {namaIbuCewe}
            </Ortu>
            <ContainerIcon>
              <WrapperIcon href={linkFBCewe}>
                <FiFacebook />
              </WrapperIcon>
              <WrapperIcon href={linkIGCewe}>
                <FiInstagram />
              </WrapperIcon>
            </ContainerIcon>
          </Mempelai>

          {/* MEMPELAI COWO */}

          <Mempelai>
            <BingkaiTm1 foto={photoCowo} />
            <Nama>{namaLkpCowo}</Nama>
            <Ortu>
              {urutanAnakCowo} Bapak {namaAyahCowo} & Ibu {namaIbuCowo}
            </Ortu>
            <ContainerIcon>
              <WrapperIcon href={linkFBCowo}>
                <FiFacebook />
              </WrapperIcon>
              <WrapperIcon href={linkIGCowo}>
                <FiInstagram />
              </WrapperIcon>
            </ContainerIcon>
          </Mempelai>
        </Middle>
      </Container>
    </Background>
  );
};

export default KetigaTm1;
