import React from "react";
import styled from "styled-components";
import {colors} from '../../../utils'

const Container = styled.span`
  margin: 10px 0px 10px;
`;
const Text = styled.label`

`;
const TextInput = styled.input`
padding-left: 20px;
width: 300px;
height: 35px;
outline: none;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 2px solid ${colors.secondary};
`;

const Inputan = ({ label, placeholder, type, name }) => {
  return (
    <Container>
      <TextInput placeholder={placeholder} type={type} name={name} />
      <Text>{label}</Text>
    </Container>
  );
};

export default Inputan;
