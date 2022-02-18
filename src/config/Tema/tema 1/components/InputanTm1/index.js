import React from "react";
import styled from "styled-components";
import {colors} from '../../../../../utils'

const Container = styled.span`
  margin: 10px 0px 10px;
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

const InputanTm1 = ({...rest }) => {

  return (
    <Container>
      <TextInput {...rest}/>
    </Container>
  );
};

export default InputanTm1;
