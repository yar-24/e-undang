import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
`
const Input = styled.input``

const UploadImg = ({...rest}) => {
  return (
    <Container>
      <Input type="file" multiple {...rest} />
    </Container>
  );
};

export default UploadImg;
