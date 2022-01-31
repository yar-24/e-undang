import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import { mobile } from "../../../responsive";
import { colors } from "../../../utils";

const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  color: white;
  padding: 5px;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background-color: ${colors.secondary};
    color: black;
  }

  ${mobile({ marginBottom: "90px", marginTop: "0" })};
`;
const Icon = styled.span`
  margin-right: 10px;
`;
const Text = styled.p`
  font-family: "Abril Fatface", cursive;
  ${mobile({ fontSize: "14px" })};
`;

const Button = ({
  label,
  icon,
  link,
  width,
  padding,
  margin,
  onClick,
  ref,
}) => {
  return (
    <Fade bottom>
      <Container
        href={link}
        style={{ width: width, padding: padding, margin: margin }}
        onClick={onClick}
        ref={ref}
      >
        <Icon>{icon}</Icon>
        <Text>{label}</Text>
      </Container>
    </Fade>
  );
};

export default Button;
