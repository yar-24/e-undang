import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
`
const Input = styled.input`
color: white;
`

const UploadImg = ({...rest}) => {
  return (
    <Container>
      {/* {img && <Image src={img} alt="preview" />} */}
      <Input type="file" multiple {...rest} />
    </Container>
  );
};

export default UploadImg;
