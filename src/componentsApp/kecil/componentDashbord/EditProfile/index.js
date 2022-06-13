import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Swal from "sweetalert2";
import {
  logout,
  reset,
  update,
} from "../../../../config/redux/features/auth/authSlice";
import { ThemeContext } from "../../../../context";
import { colors, fonts, mobile } from "../../../../utils";
import Inputan from "../../Inputan";
import Jarak from "../../Jarak";
import Loading from "../../Loading";

const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  padding: 50px;
  top: 25vh;
  right: 5vw;
  margin: 0 30px 0;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  ${mobile({
    position: "initial",
    flexDirection: "column",
    width: "80%",
    height: "50%",
    marginLeft: 0,
    margin: "15vh 20px 0",
    padding: "0px 20px 0px",
    zIndex: "1",
  })}
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 1px solid #333;
  ${mobile({ width: "100px", height: "100px" })}
`;

const Bottom = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  margin: 20px 0 40px;
`;

const Right = styled.div`
  width: 50%;
`;

const Left = styled.div`
  width: 50%;
`;

const Button = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 5vh;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-family: ${fonts.montserrat};
  font-weight: 600;
  background-color: ${colors.btnSecondary};
  cursor: pointer;
  ${mobile({ fontSize: "12px", width: "30vw", padding: 0 })}
`;

const EditProfile = ({ width }) => {
  const [picProfile, setPicProfile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [imagePreview, setImagePreview] = useState(null);

  const { user, isLoading } = useSelector((state) => state.auth);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onPicProfile = (e) => {
    const file = e.target.files[0];
    setPicProfile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setImagePreview(user.picProfile);
  }, [user]);

  if (isLoading) {
    return (
      <Loading type={"balls"} color={"#FFFFFF"} height={"20%"} width={"20%"} />
    );
  }

  const onSubmit = () => {
    const data = new FormData();

    if (!name || !email || !password || !password2) {
      toast.error("harus diinput semua");
    } else {
      if (password !== password2 || password2 !== password) {
        toast.error("Password tidak sama");
      } else {
        data.append("name", name);
        data.append("email", email);
        data.append("password", password);
        data.append("picProfile", picProfile);
        Swal.fire({
          title: "Apa kamu yakin?",
          text: "Untuk mengubah profile, Anda diharuskan Logout dan login kembali! Pastikan Anda menginngat Email dan Password!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, save!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "Logout!",
              "Your account has been logout.",
              "success",
              dispatch(logout()),
              dispatch(reset()),
              navigate("/"),
              dispatch(update(data))
            );
          }
        });
      }
    }
  };

  return (
    <Container
      style={{
        color: darkMode ? "#ffffff" : "#333",
        backgroundColor: darkMode ? "#555" : "#FFFFFF",
        width: width,
        transition: "all 1s ease",
      }}
    >
      <Top>
        {imagePreview ? (
          <Image src={imagePreview} alt="input_gambar" />
        ) : (
          <Image
            src={"https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="profile"
          />
        )}
        <input type="file" onChange={(e) => onPicProfile(e)} />
      </Top>
      <Bottom>
        <Right>
          <Inputan
            label="Nama"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Inputan
            label="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Right>
        <Left>
          <Inputan
            label="Password Baru"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Inputan
            label="Confirm Password"
            type="password"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
        </Left>
      </Bottom>
      <Jarak height={10} />
      <Button onClick={onSubmit}>Save</Button>
    </Container>
  );
};

export default EditProfile;
