import React from "react";
import styled from "styled-components";
import { colors } from "../../../utils";

const Button = styled.button`
width: 20%;
text-decoration: none;
margin: 20px 20px 20px;
padding: 10px;
border: none;
color: white;
background-color: ${colors.primary};
cursor: pointer;
&:disabled{
  color: red ;
  cursor: not-allowed;
}
:hover{
  color: black;
background-color: ${colors.secondary};
}
`

const Tombol = ({ title, ...rest }) => {
  return (
    <>
      <Button {...rest}>{title}</Button>
    </>
  );
};

export default Tombol;
