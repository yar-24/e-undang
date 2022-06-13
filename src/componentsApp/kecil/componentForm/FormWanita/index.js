import React from "react";
import styled from "styled-components";
import { fonts, mobile } from "../../../../utils";
import Inputan from "../../Inputan";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  ${mobile({width: "100%", marginTop: "20px"})}
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-family: ${fonts.montserrat};
  ${mobile({fontSize: "16px"})}
`;

const Foto = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 50%;
  border: 1px solid #333 ;
  object-fit: cover;
  ${mobile({ height: "80px", width: "80px" })}
`;

const File = styled.input`

`;

const FormWanita = (props) => {

  const {
    namaLkpCewe,
    onChangeNamaLkpCewe,
    namaPglCewe,
    onChangeNamaPglCewe,
    namaAyahCewe,
    onChangeNamaAyahCewe,
    namaIbuCewe,
    onChangeNamaIbuCewe,
    urutanAnakCewe,
    onChangeUrutanAnakCewe,
    linkIGCewe,
    onChangeLinkIGCewe,
    linkFBCewe,
    onChangeLinkFBCewe,
    imagePreview,
    onPhotoCewe,
  } = props;

  return (
    <Container>
      <Top>
        <Title>Pengantin Wanita</Title>
        {imagePreview ? (
          <Foto src={imagePreview} alt="photoCewe" />
        ) : (
          <Foto src={"https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="photoCewe" />
        )}
        <File type="file" onChange={(e) => onPhotoCewe(e)} />
      </Top>
      <Inputan
        label="Nama Lengkap Wanita"
        placeholder="Nama Lengkap..."
        value={namaLkpCewe}
        onChange={onChangeNamaLkpCewe}
      />
      <Inputan
        label="Nama Panggilan Wanita"
        placeholder="Nama Panggilan..."
        value={namaPglCewe}
        onChange={onChangeNamaPglCewe}
      />
      <hr style={{ width: "90%", marginTop: "10px" }} />
      <Inputan
        label="Nama Ayah"
        placeholder="Nama Ayah..."
        value={namaAyahCewe}
        onChange={onChangeNamaAyahCewe}
      />
      <Inputan
        label="Nama Ibu"
        placeholder="Nama Ibu..."
        value={namaIbuCewe}
        onChange={onChangeNamaIbuCewe}
      />
      <hr style={{ width: "90%", marginTop: "10px" }} />
      <Inputan
        label="Urutan Anak Ke-"
        placeholder="Putri Ke-..."
        value={urutanAnakCewe}
        onChange={onChangeUrutanAnakCewe}
      />
      <hr style={{ width: "90%", marginTop: "10px" }} />
      <Inputan
        label="Link Instagram"
        placeholder="Link..."
        value={linkIGCewe}
        onChange={onChangeLinkIGCewe}
      />
      <Inputan
        label="Link Facebook"
        placeholder="Link..."                                                                 
        value={linkFBCewe}
        onChange={onChangeLinkFBCewe}
      />
    </Container>
  );
};

export default FormWanita;
