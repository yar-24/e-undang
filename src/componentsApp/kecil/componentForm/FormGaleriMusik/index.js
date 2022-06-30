import React from "react";
import styled from "styled-components";
import { fonts, mobile } from "../../../../utils";
import Inputan from "../../Inputan";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  ${mobile({ fontSize: "16px" })}
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 30%;
  ${mobile({ width: "100%" })}
`;

const Text = styled.p`
  font-size: 20px;
  font-family: ${fonts.montserrat};
  margin-bottom: 0;
  ${mobile({ fontSize: "12px" })}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  ${mobile({ width: "100%", alignItems: "center" })}
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  ${mobile({ width: "100%", alignItems: "center" })}
`;

const FormGaleriMusik = (props) => {
  const {
    setPhotoBerdua,
    setMusic,
    setFiles,
    idYT,
    onChangeIdYT,
    linkLive,
    onChangeLinkLive,
  } = props;

  const onFiles = (e) => {
   setFiles(e.target.files)
  };

  const onMusic = (e) => {
    const file = e.target.files[0];
    setMusic(file);
  }

  const onPhotoBerdua = (e) => {
    const file = e.target.files[0];
    setPhotoBerdua(file);
  }

  return (
    <Container>
      <Title>Galeri, Musik dan Live Stream</Title>
      <Top>
        <Text>Input Foto kalian (Maks 5MB dan Maks 13 Foto)</Text>
        <Inputan type="file" multiple onChange={(e) => onFiles(e)} />
      </Top>
      <Wrapper>
        <Left>
          <Inputan label="File Music" type="file" onChange={(e) => onMusic(e)} />
          <Inputan
            label="ID Youtube Vidio Galeri Anda"
            placeholder="ID Link Youtube..."
            value={idYT}
            onChange={onChangeIdYT}
          />
        </Left>
        <Right>
          <Inputan label="Foto Berdua Anda" type="file" onChange={(e) => onPhotoBerdua(e)} />
          <Inputan
            label="Link Live Stream"
            placeholder="Link Live Stream...  "
            value={linkLive}
            onChange={onChangeLinkLive}
          />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default FormGaleriMusik;
