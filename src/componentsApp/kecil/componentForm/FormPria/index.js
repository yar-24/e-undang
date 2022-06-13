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
  ${mobile({ width: "100%" })}
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-family: ${fonts.montserrat};
  ${mobile({ fontSize: "16px" })}
`;

const Foto = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 50%;
  object-fit: cover;
   border: 1px solid #333 ;
  ${mobile({ height: "80px", width: "80px" })}
`;

const File = styled.input``;

const FormPria = (props) => {
  const {
    namaLkpCowo,
    onChangeNamaLkpCowo,
    namaPglCowo,
    onChangeNamaPglCowo,
    namaAyahCowo,
    onChangeNamaAyahCowo,
    namaIbuCowo,
    onChangeNamaIbuCowo,
    urutanAnakCowo,
    onChangeUrutanAnakCowo,
    linkIGCowo,
    onChangeLinkIGCowo,
    linkFBCowo,
    onChangeLinkFBCowo,
    onPhotoCowo,
    imagePreview,
  } = props;

  return (
    <Container>
      <Top>
        <Title>Pengantin Pria</Title>
        {imagePreview ? (
          <Foto src={imagePreview} alt="photoCowo" />
        ) : (
          <Foto src={"https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="photoCowo" />
        )}
        <File type="file" onChange={(e) => onPhotoCowo(e)} />
      </Top>
      <Inputan
        label="Nama Lengkap Pria"
        placeholder="Nama Lengkap..."
        value={namaLkpCowo}
        onChange={onChangeNamaLkpCowo}
      />
      <Inputan
        label="Nama Panggilan Pria"
        placeholder="Nama Panggilan..."
        value={namaPglCowo}
        onChange={onChangeNamaPglCowo}
      />
      <hr style={{ width: "90%", marginTop: "10px" }} />
      <Inputan
        label="Nama Ayah"
        placeholder="Nama Ayah..."
        value={namaAyahCowo}
        onChange={onChangeNamaAyahCowo}
      />
      <Inputan
        label="Nama Ibu"
        placeholder="Nama Ibu..."
        value={namaIbuCowo}
        onChange={onChangeNamaIbuCowo}
      />
      <hr style={{ width: "90%", marginTop: "10px" }} />
      <Inputan
        label="Urutan Anak Ke-"
        placeholder="Putra Ke-..."
        value={urutanAnakCowo}
        onChange={onChangeUrutanAnakCowo}
      />
      <hr style={{ width: "90%", marginTop: "10px" }} />
      <Inputan
        label="Link Instagram"
        placeholder="Link..."
        value={linkIGCowo}
        onChange={onChangeLinkIGCowo}
      />
      <Inputan
        label="Link Facebook"
        placeholder="Link..."                                                                 
        value={linkFBCowo}
        onChange={onChangeLinkFBCowo}
      />
    </Container>
  );
};

export default FormPria;
