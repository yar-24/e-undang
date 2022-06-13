import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkR, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Input, Tombol, Loading, BtnHome } from "../../componentsApp";
import { LoginImg, LogoSvg } from "../../img";
import { fonts, colors, mobile } from "../../utils";
import { toast } from "react-toastify";
import { login, reset } from "../../config/redux/features/auth/authSlice";
import {AiOutlineUser, AiFillLock} from 'react-icons/ai'
import { FaGooglePlusG } from "react-icons/fa";
import Swal from "sweetalert2";

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100% ;
  height: 100vh ;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${LoginImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 100%;
  height: 100vh;
  width: 50%;
  ${mobile({ display: "none" })}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  color: white;
  background: rgba(51, 51, 51, 0.46);
  border-radius: 10px;
  margin-top: 30vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: ${fonts.montserrat};
`;

const Text = styled.p`
  font-family: ${fonts.montserrat};
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const LogoContainer = styled(LinkR)`
  display: flex;
  margin-bottom: 50px;
  text-decoration: none;
`;

const ImgLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const Logo = styled.p`
  font-weight: 700;
  font-family: ${fonts.montserrat};
  margin-left: 5px;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  ${mobile({ width: "90%" })}
`;

const TextLogin = styled.h4`
  font-family: ${fonts.montserrat};
`;

const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const ContainerGoogle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 45px;
  background-color: ${colors.btnSecondary};
  border: 1px solid ${colors.btnSecondary};
  border-radius: 5px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #fcf9f9;
    color: ${colors.btnSecondary};
    border: 1px solid ${colors.btnSecondary};
  }
`;

const IconGoogle = styled.div`
  margin-right: 10px;
`;

const TextGoggle = styled.p`
  font-weight: 700;
`;

const LupaPw = styled.a`
  font-size: 13px;
  cursor: pointer;
`;

const Register = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const TextRegister = styled.p`
  ${mobile({ fontSize: "13px" })}
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Berhasil!',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return (
      <Loading type={"balls"} color={"#FFFFFF"} height={"20%"} width={"20%"} />
    );
  }

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  return (
    <Container>
      <Left>
        <Card>
          <Title>Dalam 24 Detik Undangan Onlien Siap di Sebarkan </Title>
          <Text>
            Ingat 1 Akun hanya untuk 1 jenis undangan dan 1 kali transaksi
          </Text>
        </Card>
      </Left>
      <Right>
      <BtnHome/>
        <LogoContainer to="/">
          <ImgLogo src={LogoSvg} />
          <Logo>E-Undang</Logo>
        </LogoContainer>
        <FormLogin onSubmit={onSubmit}>
          <TextLogin>Hai, Silahkan Login!</TextLogin>
          <Input
            label="Email"
            style={{ color: "#333", fontWeight: "400" }}
            placeholder="Usernamme"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            Icon={<AiOutlineUser/>}
          />
          <Input
            type="password"
            label="Password"
            style={{ color: "#333", fontWeight: "400" }}
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            Icon={<AiFillLock/>}
          />
          <ContainerBottom>
            <LupaPw>Lupa Password?</LupaPw>
            <Tombol
              title="Login"
              style={{
                backgroundColor: "rgb(219, 15, 112)",
                width: "30%",
                height: "40px",
                padding: "5px",
                borderRadius: "5px",
                fontSize: "15px",
              }}
            />
          </ContainerBottom>
        </FormLogin>
          {/* Button Google */}
        <TextRegister>Atau Login Dengan Google</TextRegister>
        <ContainerGoogle onClick={google}>
          <IconGoogle>
            <FaGooglePlusG size={30} />
          </IconGoogle>
          <TextGoggle>Google</TextGoggle>
        </ContainerGoogle>
        <Register>
          <TextRegister>Belum punya akun E-Undang?</TextRegister>
          <LinkR to="/register">
            <Tombol
              title="DAFTAR NOW"
              style={{
                backgroundColor: "rgb(219, 15, 112)",
                width: "100%",
                height: "30px",
                padding: "5px",
                borderRadius: "5px",
                fontSize: "11px",
              }}
            />
          </LinkR>
        </Register>
      </Right>
    </Container>
  );
};

export default Login;
