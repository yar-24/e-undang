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
  ${mobile({ width: "100%", marginTop: "20px" })}
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

const FormResepsi = (props) => {
  const {
    tglResepsi,
    onChangeTglResepsi,
    waktuResepsi,
    onChangeWaktuResepsi,
    alamatResepsi,
    onChangeAlamatResepsi,
    linkAlmtResepsi,
    onChangeLinkAlmtResepsi,
    onWaktuBagianResepsi
  } = props;

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <Container>
      <Title>Waktu dan Tempat Resepsi Nikah</Title>
      <Inputan
        label="Tanggal Resepsi"
        type="date"
        value={tglResepsi}
        onChange={onChangeTglResepsi}
      />
      <ContainerWaktu>
        <Inputan
          label="Waktu Akad"
          type="time"
          placeholder="00:00 WIB/WITA/WIT"
          value={waktuResepsi}
          onChange={onChangeWaktuResepsi}
          styleContainer={{ margin: 0, width: "100%" }}
        />
        <RadioContainer onChange={onWaktuBagianResepsi} style={{}}>
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
        <Text>Alamat Resepsi</Text>
        <TextArea
          placeholder="Masukan alamat resepsi nikah..."
          value={alamatResepsi}
          onChange={onChangeAlamatResepsi}
          rows="4"
          cols="35"
          style={{
            backgroundColor: darkMode ? "#333" : "#F4F4F4",
            color: darkMode ? "#FFF" : "#333",
          }}
        />
      </ContainerTextArea>
      <Inputan
        label="Link Alamat Resepsi"
        placeholder="Link Google Maps..."
        value={linkAlmtResepsi}
        onChange={onChangeLinkAlmtResepsi}
      />
    </Container>
  );
};

export default FormResepsi;
