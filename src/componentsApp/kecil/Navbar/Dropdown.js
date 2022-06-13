import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { mobile } from "../../../utils";

const ContainerIcon = styled.div`
  display: none;
  ${mobile({
    display: "flex",
    cursor: "pointer"
  })}
`;

const Dropdown = ({handleClick, click, style, size}) => {

  return (
      <ContainerIcon onClick={handleClick} style={style} >
        {click ? <AiOutlineClose size={size} /> : <AiOutlineMenu size={size}/>}
      </ContainerIcon>
  );
};

export default Dropdown;
