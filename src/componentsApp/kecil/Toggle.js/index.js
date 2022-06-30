import {IconMoon, IconSun} from '../../../img'
import { useContext } from "react";
import { ThemeContext } from '../../../context'
import styled from "styled-components";
import { mobile } from '../../../utils';

const Container = styled.div`
    width: 50px;
    height: 25px;
    border-radius: 20px;
    border: 1px solid #999;
    background-color: #333;
    position: fixed;
    top: 20px;
    right: 10px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-around;  
    ${mobile({right: "20px", top: "70px", position: "absolute"})}
`
const Icon = styled.img`
    width: 15px;
    height: 15px;
`

const Button = styled.div`
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: orange;
    position: absolute;
    transition: all 0.5s ease;
    cursor: pointer;
`


const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <Container style={{backgroundColor: darkMode && "#fff"}}>
      <Icon src={IconSun} alt="sun" />
      <Icon src={IconMoon} alt="moon" />
      <Button
        onClick={handleClick}
        style={{
          left: theme.state.darkMode ? 0 : 26,
          backgroundColor: darkMode && "#333",
        }}
      ></Button>
    </Container>
  );
};

export default Toggle;
