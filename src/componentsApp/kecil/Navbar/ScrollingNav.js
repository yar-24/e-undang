import React from "react";
import styled from "styled-components";
import { colors, fonts, mobile } from "../../../utils";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Dropdown from "./Dropdown";
import { LogoSvg } from "../../../img";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../../config/redux/features/auth/authSlice";
import Swal from "sweetalert2";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  max-width:1440px ;
  align-items: center;
  justify-content: space-around ;
  font-family: ${fonts.josefinSans};
  font-size: 18px;
  position: sticky ;
  top: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.57);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  transition: all 1s ease ;
  ${mobile({ height: "10vh", paddingRight: "20px" })}
`;

const ContainerLogo = styled.div`
  display: flex;
  width: 50%;
  ${mobile({ width: "80%", alignItems: "center", marginLeft: "20px" })}
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  ${mobile({ width: "30px", height: "30px" })}
`;

const TextLogo = styled.p`
  font-family: ${fonts.montserrat};
  font-size: 24px;
  font-weight: bold;
  ${mobile({ fontSize: "15px" })}
`;

const BtnNavbar = styled(LinkS)`
  text-decoration: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  :hover {
    box-shadow: 0px 5px 0px ${colors.btnPink};
  }
`;

const Login = styled(LinkR)`
  display: flex;
  justify-content: center;
  flex-direction: row ;
  align-items: center;
  padding: 2px 20px 2px;
  margin-right: 20px ;
  width: 88px;
  height: 38px;
  border-radius: 100px;
  background: ${colors.btnPrimary};
  box-shadow: ${colors.btnShadow};
  text-decoration: none;
  cursor: pointer;
  :active {
    color: ${colors.btnSecondary};
  }
  ${mobile({
    padding: "2px 10px 2px",
    height: "25px",
    width: "50px",
    marginLeft: "10px",
  })}
`;
const Logout = styled.button`
 display: flex;
  justify-content: center;
  flex-direction: row ;
  align-items: center;
  padding: 2px 20px 2px;
  margin-right: 20px ;
  width: 88px;
  height: 38px;
  border-radius: 100px;
  border: none ;
  background: ${colors.btnPrimary};
  box-shadow: ${colors.btnShadow};
  text-decoration: none;
  cursor: pointer;
  :active {
    color: ${colors.btnSecondary};
  }
  ${mobile({
    height: "35px",
    width: "66px",
    marginLeft: "10px",
  })}
`;

const Text = styled.p`
  font-weight: bold;
  ${mobile({ fontSize: "12px" })}
`;

const ScollingNav = ({handleClicks, clicks}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);


  const onLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Logout!",
          "Your account has been logout.",
          "success",
          dispatch(logout()),
          dispatch(reset()),
          navigate("/")
        );
      }
    });
  };


  return (
    <Container >
      <ContainerLogo>
        <Logo src={LogoSvg} />
        <TextLogo>E - Undang</TextLogo>
      </ContainerLogo>
      <Dropdown handleClick={handleClicks} click={clicks} />
      <BtnNavbar to="home" smooth={true} duration={200} exact="true" >
        Home
      </BtnNavbar>
      <BtnNavbar to="tema" smooth={true} duration={300} offset={-70}>
        Tema
      </BtnNavbar>
      <BtnNavbar to="harga" smooth={true} duration={300} offset={-20}>
        Harga
      </BtnNavbar>
      <BtnNavbar to="faq" smooth={true} duration={300} offset={-70}>
        FAQ
      </BtnNavbar>
      {user ? (
        <Logout onClick={onLogout}>
          <Text>Logout</Text>
        </Logout>
      ) : (
        <Login to="/login">
          <Text>Login</Text>
        </Login>
      )}
    </Container>
  );
};

export default ScollingNav;
