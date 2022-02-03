import React from "react";
import { Zoom } from "react-reveal";
import styled from "styled-components";
import { Lingkaran } from "../assets/images";

const ContainerLingkaran = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 210px;
  height: 210px;
  margin-top: 50px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
`;

const Bingkai = styled.img`
  width: 300px;
  z-index: 3;
`;

const BingkaiCicle = ({ mb, foto }) => {
  return (
    <Zoom>
      <ContainerLingkaran style={{ marginBottom: mb }}>
        <Bingkai src={Lingkaran} />
        <Image src={foto} />
      </ContainerLingkaran>
    </Zoom>
  );
};

export default BingkaiCicle;
