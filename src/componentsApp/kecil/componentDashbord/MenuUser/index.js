import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AiFillEdit, AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { GiBigDiamondRing } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { ThemeContext } from "../../../../context";
import {
  logout,
  reset,
} from "../../../../config/redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { colors, mobile } from "../../../../utils";
import Swal from "sweetalert2";
import { getGoals } from "../../../../config/redux/features/goals/goalSlice";

const Container = styled.div`
  width: 12vw;
  right: 50px;
  top: 70px;
  position: fixed;
  background-color: #fff;
  z-index: 6;
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25));
  ${mobile({ width: "30%", right: "20px" })}
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 0;
  border-bottom: 1px solid #bcbcbc;
  cursor: pointer;
  :hover {
    background-color: ${colors.abuGelap};
  }
`;

const Text = styled.p`
  margin-left: 10px;
  font-size: 16px;
  ${mobile({ fontSize: "12px" })}
`;

const MenuUser = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { goals, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getGoals());
  }, [isError, message, dispatch]);


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

  const onUndang = () => {
    if (!goals[0]) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Maaf undangan Anda balum ada!',
        footer: 'Segera buat undangan terlebih dahulu!!!'
      })
    } else {
      navigate(`/blue-flower/:namaTamu/${user._id}`);
    }
  };

  const onEditUndang = () => {
    if (!goals[0]) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Maaf undangan Anda balum ada!',
        footer: 'Segera buat undangan terlebih dahulu!!!'
      })
    } else {
      navigate(`/data-premium/${user._id}`)
    }
  }

  return (
    <Container style={{ backgroundColor: darkMode ? "#555" : "#F2F2F2" }}>
      <Link
        to="/dashboard"
        style={{ textDecoration: "none", color: darkMode ? "#F2F2F2" : "#333" }}
      >
        <Button>
          <AiOutlineDashboard size={20} />
          <Text>Dasboard</Text>
        </Button>
      </Link>
      <Link
        to={`/profile/${user._id}`}
        style={{ textDecoration: "none", color: darkMode ? "#F2F2F2" : "#333" }}
      >
        <Button>
          <AiOutlineUser size={20} />
          <Text>Profile</Text>
        </Button>
      </Link>
      <Button
        onClick={onUndang}
        style={{ textDecoration: "none", color: darkMode ? "#F2F2F2" : "#333" }}
      >
        <GiBigDiamondRing size={20} />
        <Text>UndanganKu</Text>
      </Button>
      <Button
        onClick={onEditUndang}
        style={{ textDecoration: "none", color: darkMode ? "#F2F2F2" : "#333" }}
      >
        <AiFillEdit size={20} />
        <Text>Edit undangan</Text>
      </Button>
      <Link
        to=""
        style={{ textDecoration: "none", color: darkMode ? "#F2F2F2" : "#333" }}
      >
        <Button onClick={onLogout}>
          <FiLogOut size={20} />
          <Text>Logout</Text>
        </Button>
      </Link>
    </Container>
  );
};

export default MenuUser;
