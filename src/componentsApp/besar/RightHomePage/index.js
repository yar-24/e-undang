import React from "react";
import styled from "styled-components";
import { Phone } from "../../../img";
import { mobile } from "../../../utils";

const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  ${mobile({ margin: "10px 0px 5px" })}
`;

const ImagePhone = styled.img`
  width: 400px;
  height: 300px;
  ${mobile({ width: "200px", height: "150px" })}
`;

const RightHomePage = () => {
  return (
    <ContainerImg>
      <ImagePhone src={Phone} />
    </ContainerImg>
  );
};

export default RightHomePage;
