import React from "react";
import { BiHomeHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../utils";

const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px ;
  width: 30px;
  height: 30px;
  margin: 5px;
  background-color: ${colors.btnSecondary};
  border: 1px solid ${colors.btnSecondary} ;
  color: white;
  cursor: pointer;
  :hover {
    background-color: white;
    color: ${colors.btnSecondary};
  }
`;

const BtnHome = () => {
  return (
    <Link to="/">
      <Container>
        <BiHomeHeart size={20} />
      </Container>
    </Link>
  );
};

export default BtnHome;
