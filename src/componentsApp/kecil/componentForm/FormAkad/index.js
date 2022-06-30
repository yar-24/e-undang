import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../../context";
import { colors, fonts, mobile } from "../../../../utils";
import Inputan from "../../Inputan";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  border-right: 1px solid ${colors.abuGelap};
  ${mobile({ width: "100%", borderRight: "none" })}
`;

const Title = styled.h2`
  font-family: ${fonts.montserrat};
  ${mobile({ fontSize: "16px" })}
`;

const ContainerTextArea = styled.div`
  width: 90%;
`;

const Text = styled.p`
  font-weight: 500;
  font-family: ${fonts.montserrat};
  ${mobile({ marginBottom: "5px", fontSize: "12px" })}
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${colors.abuGelap};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  transition: all 1s ease;
  ::placeholder {
    font-weight: 500;
    font-family: ${fonts.montserrat};
    color: ${colors.abuGelap};
  }
  ${mobile({ fontSize: "12px" })}
`;

const Hr = styled.hr`
  display: none;
  ${mobile({ display: "flex", width: "90%", marginTop: "10px" })}
`;

const ContainerWaktu = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 90%;
  ${mobile({ height: "15vh", flexDirection: "column", marginBottom: "10px" })}
`;

const RadioContainer = styled(RadioGroup)`
  width: 50%;
  height: 50px;
  display: flex;
  margin-top: 10px;
  ${mobile({ position: "relative" })}
`;

const Radio = styled(ReversedRadioButton)`
  ${mobile({ fontSize: "12px" })}
`;

const FormAkad = (props) => {
  const {
    tglAkad,
    onChangeTglAkad,
    waktuAkad,
    onChangeWaktuAkad,
    alamatAkad,
    onChangeAlamatAkad,
    linkAlmtAkad,
    onChangeLinkAlmtAkad,
    onWaktuBagianAkad,
  } = props;

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container>
      <Title>Waktu dan Tempat Akad Nikah</Title>
      <Inputan
        label="Tanggal Akad"
        type="date"
        value={tglAkad}
        onChange={onChangeTglAkad}
      />
      <ContainerWaktu>
        <Inputan
          label="Waktu Akad"
          type="time"
          placeholder="00:00 WIB/WITA/WIT"
          value={waktuAkad}
          onChange={onChangeWaktuAkad}
          styleContainer={{ margin: 0, width: "100%" }}
        />
        <RadioContainer onChange={onWaktuBagianAkad}>
          <Radio
            pointColor={darkMode ? "#50bafe" : colors.btnSecondary}
            rootColor={darkMode && "#999"}
            padding={5}
            value="WIB"
          >
            WIB
          </Radio>
          <Radio
            pointColor={darkMode ? "#50bafe" : colors.btnSecondary}
            rootColor={darkMode && "#999"}
            padding={5}
            value="WITA"
          >
            WITA
          </Radio>
          <Radio
            pointColor={darkMode ? "#50bafe" : colors.btnSecondary}
            rootColor={darkMode && "#999"}
            padding={5}
            value="WIT"
          >
            WIT
          </Radio>
        </RadioContainer>
      </ContainerWaktu>
      <ContainerTextArea>
        <Text>Alamat Akad</Text>
        <TextArea
          placeholder="Masukan alamat akad nikah..."
          value={alamatAkad}
          onChange={onChangeAlamatAkad}
          rows="4"
          cols="35"
          style={{
            backgroundColor: darkMode ? "#333" : "#F4F4F4",
            color: darkMode ? "#FFF" : "#333",
          }}
        />
      </ContainerTextArea>
      <Inputan
        label="Link Alamat Akad"
        placeholder="Link Google Maps..."
        value={linkAlmtAkad}
        onChange={onChangeLinkAlmtAkad}
      />
      <Hr />
    </Container>
  );
};

export default FormAkad;
