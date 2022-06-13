import React from "react";
import styled from "styled-components";
import { mobile } from "../../../../utils";
import Inputan from "../../Inputan";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
${mobile({fontSize: "16px"})}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${mobile({ flexDirection: "column" })}
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  ${mobile({
    width: "100%",
  })}
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  ${mobile({ width: "100%"})}
`;

const Hr = styled.hr`
  display:none ;
  ${mobile({display: "flex",width: "90%", marginTop: "10px"})}
`

const FormDompet = (props) => {

  const {
    namaBank,
    onChangeNamaBank,
    noRek,
    onChangeNoRek,
    atasNamaBank,
    onChangeAtasNamaBank,
    namaDompet,
    onChangeNamaDompet,
    noHp,
    onChangeNoHp,
    atasNamaDompet,
    onChangeAtasNamaDompet
  } = props;

  return (
    <Container>
      <Title>Dompet Digital</Title>
      <Wrapper>
        <Right>
          <Inputan label="Nama Bank" placeholder="Nama Bank..." value={namaBank} onChange={onChangeNamaBank} />
          <Inputan label="Nomor Rekening Bank" placeholder="No Rekening..." value={noRek} onChange={onChangeNoRek} />
          <Inputan label="Atas Nama Bank Anda" placeholder="Atas Nama..." value={atasNamaBank} onChange={onChangeAtasNamaBank} />
        </Right>
        <Hr />
        <Left>
          <Inputan
            label="Nama Dompet Digital (Shoppepay/Dana/Ovo/DLL)"
            placeholder="Nama Dompet Digital...  "
            value={namaDompet}
            onChange={onChangeNamaDompet}
          />
          <Inputan label="Nomor Hp/Kode" placeholder="No Hp/Kode..." value={noHp} onChange={onChangeNoHp} />
          <Inputan
            label="Atas Nama Dompet Digital Anda"
            placeholder="Atas Nama..."
            value={atasNamaDompet}
            onChange={onChangeAtasNamaDompet}
          />
        </Left>
      </Wrapper>
    </Container>
  );
};

export default FormDompet;
