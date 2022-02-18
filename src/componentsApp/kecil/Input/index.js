import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../utils';

const Container = styled.div`
width: 100%;
margin: 10px 20px 0;
`
const Text = styled.p`
    font-weight: 700;
    color: white;
`
const Inputan = styled.input`
    width: 90%;
    padding: 10px;
    border: 1px solid ${colors.primary};
`

const Input = ({label, ...rest}) => {
  return(
      <Container>
          <Text>{label}</Text>
          <Inputan {...rest} type="text" />
      </Container>
  )
};

export default Input;
