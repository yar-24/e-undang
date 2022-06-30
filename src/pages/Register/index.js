import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Jarak, Tombol, BtnHome } from "../../componentsApp";
import { RegisterImg, LogoSvg } from "../../img";
import { fonts } from "../../utils";
import ReCAPTCHA from "react-google-recaptcha";
import { Link as LinkR, useNavigate } from "react-router-dom";
import { mobile } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "react-loading";
import { register, reset } from "../../config/redux/features/auth/authSlice";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiFillLock,
  AiOutlineKey,
} from "react-icons/ai";
import Swal from "sweetalert2";

const Container = styled.div`
  display: flex;
  justify-content: end;
  ${mobile({ justifyContent: "center" })}
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${RegisterImg});
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
  margin-top: 40vh;
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
  height: 100%;
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const LogoContainer = styled(LinkR)`
  display: flex;
  margin: 50px 0 20px;
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

const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 0px;
  ${mobile({ flexDirection: "column" })}
`;

const Regis = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  ${mobile({ width: "90%" })}
`;

const TextRegister = styled.p`
  ${mobile({ fontSize: "13px" })}
`;

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
        position: "center",
        icon: "success",
        title: "Login Berhasil!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
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

    if (password !== password2 || password2 !== password) {
      toast.error("Password tidak sama");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading
          type={"balls"}
          color={"#FFFFFF"}
          height={"20%"}
          width={"20%"}
        />
      ) : (
        <Container>
          <Left>
            <Card>
              <Title>Dalam 24 Detik Undangan Online Siap di Sebarkan </Title>
              <Text>
                Ingat 1 Akun hanya untuk 1 jenis undangan dan 1 kali transaksi
              </Text>
            </Card>
          </Left>
          <Right>
            <BtnHome />
            <LogoContainer to="/">
              <ImgLogo src={LogoSvg} />
              <Logo>E-Undang</Logo>
            </LogoContainer>
            <FormRegister onSubmit={onSubmit}>
              <Input
                label="Nama"
                style={{ color: "#333", fontWeight: "400" }}
                placeholder="nama"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                Icon={<AiOutlineUser />}
              />
              <Input
                label="Email"
                style={{ color: "#333", fontWeight: "400" }}
                placeholder="email"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                Icon={<AiOutlineMail />}
              />
              <Input
                type="password"
                label="Password"
                style={{ color: "#333", fontWeight: "400" }}
                placeholder="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                Icon={<AiFillLock />}
              />
              <Input
                type="password"
                label="Confirm Password"
                style={{ color: "#333", fontWeight: "400" }}
                placeholder="confirm password"
                id="password2"
                name="password2"
                value={password2}
                onChange={onChange}
                Icon={<AiOutlineKey />}
              />
              <Jarak height={20} />

              <ContainerBottom>
                <ReCAPTCHA
                  sitekey="6LcHAI0gAAAAAOD-4AdhDxBchgvzOSnJUead8dul"
                  // onChange={onChange}
                  theme="light"
                />
                <Tombol
                  title="Register"
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
            </FormRegister>
            <Regis>
              <TextRegister>Sudah punya akun E-Undang?</TextRegister>
              <LinkR to="/login">
                <Tombol
                  title="LOGIN DISINI!"
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
            </Regis>
          </Right>
        </Container>
      )}
    </>
  );
};

export default Register;
