import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";
import { colors } from "../../../utils";
import { Inputan } from "../index";
import Jarak from "../Jarak";
import Tombol from "../Tombol";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative ;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
`;

const ContainerBack = styled.div`
display: flex;
align-items: center ;
justify-content: center ;
border-radius: 50% ;
position: absolute ;
padding: 5px ;
left:0 ;
cursor: pointer;
:hover{
  background-color: ${colors.btnSecondary} ;
  color: #ffffff ;
}
`

const FormPembayaran = (props) => {
  const {
    src,
    handleClick,
    handleBack,
    valueFirstName,
    onChangeFirstName,
    valueLastName,
    onChangeLastName,
    valueEmail,
    onChangeEmail,
    valuePhone,
    onChangePhone,
  } = props;

  return (
    <Container>
      <ContainerBack onClick={handleBack}>
        <AiOutlineArrowLeft size={20} />
      </ContainerBack>
      <Image src={src} />
      <Inputan
        styleLabel={{ margin: 0 }}
        label="First Name"
        type="text"
        value={valueFirstName}
        onChange={onChangeFirstName}
      />
      <Inputan
        styleLabel={{ margin: 0 }}
        label="Last Name"
        type="text"
        value={valueLastName}
        onChange={onChangeLastName}
      />
      <Inputan
        styleLabel={{ margin: 0 }}
        label="Email"
        type="mail"
        value={valueEmail}
        onChange={onChangeEmail}
      />
      <Inputan
        styleLabel={{ margin: 0 }}
        label="Phone"
        type="number"
        value={valuePhone}
        onChange={onChangePhone}
      />
      <Jarak height={20} />
      <Tombol
        title="Konfirmasi"
        style={{
          backgroundColor: "rgb(219, 15, 112)",
          width: "50%",
          color: "#ffffff",
        }}
        onClick={handleClick}
        disabled={
          !valueFirstName || !valueLastName || !valueEmail || !valuePhone
        }
      />
    </Container>
  );
};

export default FormPembayaran;
