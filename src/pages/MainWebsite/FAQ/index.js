import React from "react";
import styled from "styled-components";
import { Accordion } from "../../../componentsApp";

const Container = styled.div`
width: 100% ;
display: flex;
justify-content: center ;
`

const FAQ = ({page}) => {
  return (
    <Container id={page}>
      <Accordion/>
    </Container>
  );
};

export default FAQ;
