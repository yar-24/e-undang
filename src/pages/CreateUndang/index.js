import React from "react";
import styled from "styled-components";
import { InputanCreate } from "../../componentsApp/besar";
import { ImgUpload } from "../../img";

const Bacground = styled.div`
  background-image: url(${ImgUpload});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 100%;
  padding: 10px 0px 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CreateUndang = () => {
  return (
    <Bacground>
      <Container>
        <InputanCreate/>
      </Container>
    </Bacground>
  );
};

export default CreateUndang;
