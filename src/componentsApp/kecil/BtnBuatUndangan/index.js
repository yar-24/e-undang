import React from "react";
import styled from "styled-components";
import { colors, fonts, mobile } from "../../../utils";

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 50px;
  border-radius: 100px;
  background: ${colors.btnSecondary};
  box-shadow: ${colors.btnShadow} ;
  color: white ;
  cursor: pointer;
  :hover{
    background: ${colors.btnPrimary};
    color: #333 ;
  }
  ${mobile({height: "30px", width: "160px"})}
`;

const Button = styled.div``;

const Text = styled.p`
font-size: 20px ;
  font-family: ${fonts.josefinSans};
  ${mobile({fontSize: "12px"})}
`;

const BtnBuatUndangan = ({label}) => {
  return (
    <BtnContainer>
      <Button>
        <Text>{label}</Text>
      </Button>
    </BtnContainer>
  );
};

export default BtnBuatUndangan;
