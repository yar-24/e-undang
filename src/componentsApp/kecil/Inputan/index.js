import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../context";
import { colors, fonts, mobile } from "../../../utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 10px 20px 0;
  ${mobile({ margin: "5px 10px 0" })}
`;

const Text = styled.p`
  font-weight: 500;
  font-family: ${fonts.montserrat};
  ${mobile({ marginBottom: "5px", fontSize: "12px" })}
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${colors.abuGelap};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  outline:none;
  font-size: 18px;
  transition: all 1s ease;
  :placeholder {
    font-weight: 500;
    font-family: ${fonts.montserrat};
    color: ${colors.abuGelap};
  }
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  ${mobile({ fontSize: "12px" })}
`;

const Inputan = (props) => {

  const {style, type, label, onChange,styleContainer,styleLabel,  value, placeholder, ...rest} = props

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container style={styleContainer}>
      <Text style={styleLabel}>{label}</Text>
      <InputContainer>
        <Input
          {...rest}
          style={{
            backgroundColor: darkMode ? "#333" : "#F4F4F4",
            color: darkMode ? "#FFF" : "#333",
          }}
          type={type}
          onChange={onChange}
          value={value}
          required
          placeholder={placeholder}
        />
      </InputContainer>
    </Container>
  );
};

export default Inputan;
