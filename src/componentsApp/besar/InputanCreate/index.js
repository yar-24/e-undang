import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { multipleFilesUpload, updateToAPI } from "../../../config/data/api";
import { Jarak, Input, Tombol, UploadImg } from "../../kecil";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import CetakUrl from "../../kecil/CetakUrl";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Wrapper = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  width: 50%;
  height: 100%;
  margin: 20px 0px 20px;
`;
const Title = styled.h1`
  color: white;
  text-align: center;
`;

const Conatiner = styled.div`
  margin: 20px 20px 0;
`;
const ContainerDrop = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  padding: 20px 0 20px;
`;

const Text = styled.p`
  font-weight: 700;
  color: white;
`;

const InputanCreate = () => {
  const [nama, setNama] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [multipleProgress, setMultipleProgress] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      Axios.get(`http://e-undangan.netlify.app/api/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          console.log("res :", data);
          setNama(data.nama);
        })
        .catch((err) => {
          console.log("err :", err);
        });
    }
  }, [id]);

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
  };

  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    },
  };

  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("nama", nama);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    if (isUpdate) {
      alert("Apakah Semua Data Sesuai?")
      await updateToAPI(formData, mulitpleFileOptions, id);
    } else {
      alert("Apakah Semua Data Sesuai?")
      await multipleFilesUpload(formData, mulitpleFileOptions);
    }
    alert("Selesai");
    setNama("");
  };

  // const [nama, setnama] = useState("");
  // const [namaPasangan, setNamaPasangan] = useState("");
  // const [namaPria, setNamaPria] = useState("");
  // const [namaWanita, setNamaWanita] = useState("");
  // const [namaLkpPria, setNamaLkpPria] = useState("");
  // const [namaLkpWanita, setNamaLkpWanita] = useState("");
  // const [namaOrtuPria, setNamaOrtuPria] = useState("");
  // const [namaOrtuWanita, setNamaOrtuWanita] = useState("");
  // const [tglAkad, setTglAkad] = useState("");
  // const [jamAkad, setJamAkad] = useState("");
  // const [almtAkad, setAlmtAkad] = useState("");
  // const [tglResepsi, setTglResepsi] = useState("");
  // const [jamResepsi, setJamRespsi] = useState("");
  // const [almtResepsi, setAlmtResepsi] = useState("");
  // const [noBank, setNoBank] = useState("");
  // const [anBank, setAnBank] = useState("");
  // const [noTlpShopee, setNoTlpShopee] = useState("");
  // const [anShoppe, setAnShoppe] = useState("");
  // const [idYt, setIdYt] = useState("");
  // const [linkGmaps, setLinkGmaps] = useState("");
  // const [linkCalendar, setLinkCalendar] = useState("");
  // const [linkFbWanita, setLinkFbWanita] = useState("");
  // const [linkIgWanita, setLinkIgWanita] = useState("");
  // const [linkFbPria, setLinkFbPria] = useState("");
  // const [linkIgPria, setLinkIgPria] = useState("");
  // const [files, setFiles] = useState("");

  // const onSubmit = () => {
  // console.log("nama: ", nama);
  // console.log("nama Pasangan: ", namaPasangan);
  // console.log('Nama Panggilan (Pria)',namaPria)
  // console.log('Nama Lengkap (Pria)',namaLkpPria)
  // console.log('Nama Panggilan (Wanita)',namaWanita)
  // console.log('Nama Lengkap (Wanita)',namaLkpWanita)
  // console.log('Nama OrangTua Pengantin Pria',namaOrtuPria)
  // console.log('Nama OrangTua Pengantin Wanita',namaOrtuWanita)
  // console.log('Tanggal Akad Nikah',tglAkad)
  // console.log('Jam Akad Nikah',jamAkad)
  // console.log('Alamat Akad Nikah',almtAkad)
  // console.log('Tanggal Resepsi Nikah',tglResepsi)
  // console.log('Jam Resepsi Nikah',jamResepsi)
  // console.log('Alamat Resepsi Nikah',almtResepsi)
  // console.log('Nomor Bank',noBank)
  // console.log('Atas Nama Bank',anBank)
  // console.log('Nomor Telp Shoppe/Dana',noTlpShopee)
  // console.log('Atas Nama Shopee/Dana',anShoppe)
  // console.log('ID Youtube Live',idYt)
  // console.log('Link Google Kalender',linkCalendar)
  // console.log('Link Facebook Wanita',linkFbWanita)
  // console.log('Link Instagram Wanita',linkIgWanita)
  // console.log('Link Facebook Pria',linkFbPria)
  // console.log('Link Instagram Pria',linkIgPria)
  // console.log('Link Google Maps Acara',linkGmaps)
  // console.log('Upload Images',files)

  // const data = new FormData()
  // data.append('nama: ', nama)
  // data.append('nama paaasangan: ', namaPasangan)
  // data.append('Nama Panggilan (Pria)',namaPria)
  // data.append('Nama Lengkap (Pria)',namaLkpPria)
  // data.append('Nama Panggilan (Wanita)',namaWanita)
  // data.append('Nama Lengkap (Wanita)',namaLkpWanita)
  // data.append('Nama OrangTua Pengantin Pria',namaOrtuPria)
  // data.append('Nama OrangTua Pengantin Wanita',namaOrtuWanita)
  // data.append('Tanggal Akad Nikah',tglAkad)
  // data.append('Jam Akad Nikah',jamAkad)
  // data.append('Alamat Akad Nikah',almtAkad)
  // data.append('Tanggal Resepsi Nikah',tglResepsi)
  // data.append('Jam Resepsi Nikah',jamResepsi)
  // data.append('Alamat Resepsi Nikah',almtResepsi)
  // data.append('Nomor Bank',noBank)
  // data.append('Atas Nama Bank',anBank)
  // data.append('Nomor Telp Shoppe/Dana',noTlpShopee)
  // data.append('Atas Nama Shopee/Dana',anShoppe)
  // data.append('ID Youtube Live',idYt)
  // data.append('Link Google Kalender',linkCalendar)
  // data.append('Link Facebook Wanita',linkFbWanita)
  // data.append('Link Instagram Wanita',linkIgWanita)
  // data.append('Link Facebook Pria',linkFbPria)
  // data.append('Link Instagram Pria',linkIgPria)
  // data.append('Link Google Maps Acara',linkGmaps)
  // data.append('Upload Images',files)

  //  Axios.post('http://localhost:4000/api/post', data, {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     }
  //   })
  //   .then(res => {
  //     console.log('post berhasil :', res);
  //   })
  //   .catch(err => {
  //     console.log('err', err);
  //   })
  // };

  return (
    <Wrapper>
      <Title>{isUpdate ? "Update" : "Create"} Undangan</Title>
      <Jarak height={20} />
      <Input
        label="Nama Pemesan"
        onChange={(e) => setNama(e.target.value)}
        value={nama}
      />
      {/* <Input
        label="Nama Pasangan"
        placeholder="Romeo & Juliet"
        value={namaPasangan}
        onChange={(e) => setNamaPasangan(e.target.value)}
      />
      <Input
        label="Nama Panggilan (Pria)"
        placeholder="Romeo"
        value={namaPria}
        onChange={(e) => setNamaPria(e.target.value)}
      />
      <Input
        label="Nama Lengkap (Pria)"
        placeholder="Romeo Ramadhan"
        value={namaLkpPria}
        onChange={(e) => setNamaLkpPria(e.target.value)}
      />
      <Input
        label="Nama Panggilan (Wanita)"
        placeholder="Juliet"
        value={namaWanita}
        onChange={(e) => setNamaWanita(e.target.value)}
      />
      <Input
        label="Nama Lengkap (Wanita)"
        placeholder="Juliet Ramadhini"
        value={namaLkpWanita}
        onChange={(e) => setNamaLkpWanita(e.target.value)}
      />
      <Input
        label="Nama OrangTua Pengantin Pria"
        placeholder="Putra Pertama Bapak Roma & Ibu Saputri"
        value={namaOrtuPria}
        onChange={(e) => setNamaOrtuPria(e.target.value)}
      />
      <Input
        label="Nama OrangTua Pengantin Wanita"
        placeholder="Putri Pertama Bapak Juli & Ibu putri"
        value={namaOrtuWanita}
        onChange={(e) => setNamaOrtuWanita(e.target.value)}
      />
      <Input
        label="Tanggal Akad Nikah"
        placeholder="11 November 2025"
        value={tglAkad}
        onChange={(e) => setTglAkad(e.target.value)}
      />
      <Input
        label="Jam Akad Nikah"
        placeholder="10:00"
        value={jamAkad}
        onChange={(e) => setJamAkad(e.target.value)}
      />
      <Input
        label="Alamat Akad Nikah"
        placeholder="Ds Konohagakure Kec. Konoha Kab. Negara Api"
        value={almtAkad}
        onChange={(e) => setAlmtAkad(e.target.value)}
      />
      <Input
        label="Tanggal Resepsi Nikah"
        placeholder="11 November 2025"
        value={tglResepsi}
        onChange={(e) => setTglResepsi(e.target.value)}
      />
      <Input
        label="Jam Resepsi Nikah"
        placeholder="12:00"
        value={jamResepsi}
        onChange={(e) => setJamRespsi(e.target.value)}
      />
      <Input
        label="Alamat Resepsi Nikah"
        placeholder="Ds Konohagakure Kec. Konoha Kab. Negara Api"
        value={almtResepsi}
        onChange={(e) => setAlmtResepsi(e.target.value)}
      />
      <Input
        label="Nomor Bank"
        placeholder="42-42-42-42 - Bri"
        value={noBank}
        onChange={(e) => setNoBank(e.target.value)}
      />
      <Input
        label="Atas Nama Bank"
        placeholder="Romeo Ramadhan"
        value={anBank}
        onChange={(e) => setAnBank(e.target.value)}
      />
      <Input
        label="Nomor Telp Shoppe/Dana"
        placeholder="085742***"
        value={noTlpShopee}
        onChange={(e) => setNoTlpShopee(e.target.value)}
      />
      <Input
        label="Atas Nama Shopee/Dana"
        placeholder="Romeo"
        value={anShoppe}
        onChange={(e) => setAnShoppe(e.target.value)}
      />
      <Input
        label="ID Youtube Live"
        placeholder="MsntDa_6TQ"
        value={idYt}
        onChange={(e) => setIdYt(e.target.value)}
      />
      <Input
        label="Link Google Kalender"
        placeholder="https://calendar.google.com/"
        value={linkCalendar}
        onChange={(e) => setLinkCalendar(e.target.value)}
      />
      <Input
        label="Link Facebook Wanita"
        placeholder="https://facebook.com/"
        value={linkFbWanita}
        onChange={(e) => setLinkFbWanita(e.target.value)}
      />
      <Input
        label="Link Instagram Wanita"
        placeholder="https://intagram.com/"
        value={linkIgWanita}
        onChange={(e) => setLinkIgWanita(e.target.value)}
      />
      <Input
        label="Link Facebook Pria"
        placeholder="https://facebook.com/"
        value={linkFbPria}
        onChange={(e) => setLinkFbPria(e.target.value)}
      />
      <Input
        label="Link Instagram Pria"
        placeholder="https://intagram.com/"
        value={linkIgPria}
        onChange={(e) => setLinkIgPria(e.target.value)}
      />
      <Input
        label="Link Google Maps Acara"
        placeholder="https://goo.gl/maps/AteGNbZYT6zuuXn5A"
        value={linkGmaps}
        onChange={(e) => setLinkGmaps(e.target.value)}
      /> */}
      <Conatiner>
        <Text>Upload Foto (Max 10)</Text>
        <ContainerDrop>
          <UploadImg onChange={(e) => MultipleFileChange(e)} />
          <CircularProgressbar
            value={multipleProgress}
            text={`${multipleProgress}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "30px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </ContainerDrop>
      </Conatiner>
      <Jarak height={20} />
      <Tombol
        title={isUpdate ? "Update" : "Save"}
        onClick={() => UploadMultipleFiles()}
      />
      {/* <CetakUrl /> */}
    </Wrapper>
  );
};

export default InputanCreate;
