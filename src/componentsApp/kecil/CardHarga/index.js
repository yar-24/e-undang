import React from "react";
import { fonts, colors } from "../../../utils";
import { IconCheck } from "../../../img";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import {  useSelector } from "react-redux";
import Loading from "../Loading";
import Swal from "sweetalert2";

const Container = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ flexDirection: "column" })}
`;

const WrapperHarga = styled.div`
  height: 100%;
  width: 25%;
  border-top: 10px solid ${colors.btnSecondary};
  border-radius: 10px;
  border-bottom: 1px solid ${colors.btnSecondary};
  border-right: 1px solid ${colors.btnSecondary};
  border-left: 1px solid ${colors.btnSecondary};
  background-color: #fff;
  margin: 20px;
  padding: 20px;
  box-shadow: -1px 3px 21px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 3px 21px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 3px 21px -7px rgba(0, 0, 0, 0.75);

  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease all;
  }
  ${mobile({ width: "80%", marginBottom: "30px" })}
`;

const NamaHarga = styled.h2`
  margin-top: 10px;
  font-family: ${fonts.montserrat};
  ${mobile({ fontSize: "18px" })}
`;

const Harga = styled.p`
  font-family: ${fonts.josefinSans};
  font-weight: 700;
  font-size: 24px;
  ${mobile({ fontSize: "20px" })}
`;

const ContainerButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  color: white;
  background: ${colors.btnSecondary};
  box-shadow: ${colors.btnShadow};
  border: 1px solid ${colors.btnSecondary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${colors.btnPrimary};
    color: ${colors.btnSecondary};
    border: 1px solid ${colors.btnSecondary};
  }
  ${mobile({ height: "25px", padding: "5px", margin: "10px", width: "90%" })}
`;

const Button = styled.p`
  font-family: ${fonts.josefinSans};
  font-size: 20px;
  letter-spacing: 2px;
  ${mobile({ fontSize: "13px" })}
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListFasilitas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const Icon = styled.img`
  width: 25px;
  margin-right: 20px;
`;

const List = styled.li`
  margin-left: 10px;
  list-style: none;
  ${mobile({ fontSize: "15px" })}
`;

const CardHarga = ({ style, bgColor, handlePremium }) => {
  const { isLoading } = useSelector((state) => state.pay);

  const handleGratis = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Maaf paket ini belum tersedia! 🙏",
      footer: "Silahkan Pilih Paket Premium 🤗",
    });
  };

  const handleClassic = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Maaf paket ini belum tersedia! 🙏",
      footer: "Silahkan Pilih Paket Premium 🤗",
    });
  };

  if (isLoading) {
    <Loading />;
  }

  return (
      <Container>
        <WrapperHarga style={style}>
          <NamaHarga style={{ color: "rgb(219, 15, 112)" }}>Free</NamaHarga>
          <hr style={{ width: "20%", marginLeft: "0" }} />
          <Harga>Rp 0</Harga>
          <ContainerButton onClick={handleGratis}>
            <Button>Pesan Sekarang</Button>
          </ContainerButton>
          <ListContainer>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Edit Sepuasnya</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Gallery Max 5 Foto</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Tamu Unlimited</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Musik</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Google Maps</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Aktif 7 Hari</List>
            </ListFasilitas>
          </ListContainer>
        </WrapperHarga>

        <WrapperHarga
          style={{
            borderTop: "10px solid #FDDEED",
            borderLeft: "1px solid #FDDEED",
            borderRight: "1px solid #FDDEED",
            backgroundColor: bgColor,
          }}
        >
          <NamaHarga
            style={{
              color: "#FDDEED",
              textShadow:
                "1px 1px 2px black, 0 0 25px #FFE2AB, 0 0 5px darkblue",
            }}
          >
            Premium
          </NamaHarga>
          <hr style={{ width: "20%", marginLeft: "0" }} />
          <Harga>Rp 119.000</Harga>
          <ContainerButton
            style={{ backgroundColor: "#FDDEED", color: "#333" }}
            onClick={handlePremium}
          >
            <Button>Pesan Sekarang</Button>
          </ContainerButton>
          <ListContainer>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Edit Sepuasnya</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Gallery Max 15 Foto</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Countdown (Hitung Mundur)</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Kolom Ucapan</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Tamu Unlimited</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Musik</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Google Maps</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Aktif Selamanya</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Foto Pria, Foto Wanita dan Foto Berdua</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Amplop Digital</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Live Stream</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Amplop Digital</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Link Youtube Video Gallery </List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Social Media </List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Penginggat Tanggal</List>
            </ListFasilitas>
          </ListContainer>
        </WrapperHarga>

        <WrapperHarga style={style}>
          <NamaHarga style={{ color: "rgb(219, 15, 112)" }}>Classic</NamaHarga>
          <hr style={{ width: "20%", marginLeft: "0" }} />
          <Harga>Rp 79.000</Harga>
          <ContainerButton onClick={handleClassic}>
            <Button>Pesan Sekarang</Button>
          </ContainerButton>
          <ListContainer>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Edit Sepuasnya</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Gallery Max 10 Foto</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Countdown (Hitung Mundur)</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Kolom Ucapan</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Tamu Unlimited</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Musik</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Google Maps</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Aktif 1 Tahun</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Foto Pria, Foto Wanita dan Foto Berdua</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Social Media</List>
            </ListFasilitas>
            <ListFasilitas>
              <Icon src={IconCheck} />
              <List>Link Youtube Video</List>
            </ListFasilitas>
          </ListContainer>
        </WrapperHarga>
      </Container>
  );
};

export default CardHarga;
