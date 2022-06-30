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
import { Bingkai, Background5, Asset1 } from "./assets";
import { mobile } from "../../../responsive";
import { Fade } from "react-reveal";
import { MusikTm1, NavbarTm1 } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { getGoal } from "../../redux/features/goals/goalService";
import { Loading } from "../../../componentsApp";
import { useParams } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1444px;
`;

const Background = styled.div`
  background-image: url(${Bingkai});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
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
  const [data, setData] = useState("");

  const params = useParams();

  const { isLoading } = useSelector((state) => state.goals);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/goals/${params.id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        const goal = res.data.data;
        setData(goal);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  const datetimeAkad = new Date(data.tglAkad);
  const datetimeResepsi = new Date(data.tglResepsi);

  const date = datetimeAkad.getDate();
  const month = datetimeAkad.getMonth(); // bulan dimulai dari angka 0
  const year = datetimeAkad.getFullYear();

  const dateResepsi = datetimeResepsi.getDate();
  const monthResepsi = datetimeResepsi.getMonth(); // bulan dimulai dari angka 0
  const yearResepsi = datetimeResepsi.getFullYear();


  // mendapatkan hari dalam bentuk angka integer
  const day = datetimeAkad.getDay(); // 0 adalah Minggu, 1 adalah Senin dst..
  const dayResepsi = datetimeResepsi.getDay(); // 0 adalah Minggu, 1 adalah Senin dst..

  // mapping nama-nama hari dan bulan
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const monthsIG = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const tanggalAkad = (`${days[day]}, ${date} ${months[month]} ${year}`)
  const tanggalResepsi = (`${days[dayResepsi]}, ${dateResepsi} ${months[monthResepsi]} ${yearResepsi}`)
  const countDown = (`${monthsIG[month]} ${date}, ${yearResepsi}`)

  const waktuCountDown = data.waktuAkad

  return (
    <>
      <Container>
        <NavbarTm1 />
        <Background>
          <KesatuTm1
            namaPglCewe={data.namaPglCewe}
            namaPglCowo={data.namaPglCowo}
          />
          <MusikTm1 music={data.music} />
          {/* <MusicTm1 url={data.music} /> */}
          <KeduaTm1
            page="home"
            hitungMundur={`${countDown} ${waktuCountDown}:00`}
            photoBerdua={data.photoBerdua}
            namaPglCewe={data.namaPglCewe}
            namaPglCowo={data.namaPglCowo}
            linkAlmtAkad={data.linkAlmtAkad}
          />
          <KetigaTm1
            page="profile"
            photoCewe={data.photoCewe}
            namaLkpCewe={data.namaLkpCewe}
            urutanAnakCewe={data.urutanAnakCewe}
            namaAyahcewe={data.namaAyahcewe}
            namaIbuCewe={data.namaIbuCewe}
            linkFBCewe={data.linkFBCewe}
            linkIGCewe={data.linkIGCewe}
            photoCowo={data.photoCowo}
            namaLkpCowo={data.namaLkpCowo}
            urutanAnakCowo={data.urutanAnakCowo}
            namaAyahCowo={data.namaAyahCowo}
            namaIbuCowo={data.namaIbuCowo}
            linkFBCowo={data.linkFBCowo}
            linkIGCowo={data.linkIGCowo}
          />
          <KeempatTm1
            photoBerdua={data.photoBerdua}
            tglAkad={tanggalAkad}
            waktuAkad={data.waktuAkad}
            waktuBagianAkad={data.waktuBagianAkad}
            alamatAkad={data.alamatAkad}
            tglResepsi={tanggalResepsi}
            waktuResepsi={data.waktuResepsi}
            waktuBagianResepsi={data.waktuBagianResepsi}
            alamatResepsi={data.alamatResepsi}
            linkGmaps={data.linkGmaps}
          />
          <KelimaTm1 page="galeri" files={data} idYt={data.idYt} />
          <BackgroundSambung>
            <KeenamTm1 linkLive={data.linkLive} />
            <Fade left>
              <Image src={Asset1} />
            </Fade>
            <KetujuhTm1
              noRek={data.noRek}
              atasNamaBank={data.atasNamaBank}
              noHp={data.noHp}
              atasNamaDompet={data.atasNamaDompet}
            />
            <Fade left>
              <Image src={Asset1} />
            </Fade>
            <KedelapanTm1 page="ucapan" komentar={data} />
          </BackgroundSambung>
        </Background>
      </Container>
    </>
  );
};

export default Tema1;
