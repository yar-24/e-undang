import React from "react";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import ReactLoading from 'react-loading';

const Container = styled.div`
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 6rem;
  overflow: hidden;
  position: fixed;
  z-index: 9999999 ;
  background: rgba(255, 255, 255, 0.14);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  ${mobile({ paddingBottom: "20rem"})};
`;

const Loading = () => {
  return (
    <Container>
      <ReactLoading type={"balls"} color={"#FCF2F3"} height={'20%'} width={'20%'} />
    </Container>
  );
};

export default Loading;
