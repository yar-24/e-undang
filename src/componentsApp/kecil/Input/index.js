import React from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { colors } from "../../../utils";

const Container = styled.div`
  width: 100%;
  margin: 10px 20px 0;
`;
const Text = styled.p`
  font-weight: 700;
  color: white;
`;

const InputContainer = styled.div`
  display: flex;
  width: 90%; 
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.primary};
`;

const Inputan = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
`;

const IconContainer = styled.span`
  width: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333 ;
  ${mobile({width: "10%"})}
`;

const Input = ({ type, label, onChange, Icon, ...rest }) => {
  return (
    <Container>
      <Text {...rest}> {label}</Text>
      <InputContainer>
        <IconContainer>{Icon}</IconContainer>
        <Inputan {...rest} type={type} onChange={onChange}  />
      </InputContainer>
    </Container>
  );
};

export default Input;
