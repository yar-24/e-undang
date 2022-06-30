import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { deleteGoal } from "../../../config/redux/features/goals/goalSlice";
import { colors, fonts, mobile } from "../../../utils";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 50px;
  ${mobile({ width: "90%" })}
`;

const BtnLihat = styled.button`
  border: none;
  padding: 10px 20px 10px;
  font-family: ${fonts.montserrat};
  font-weight: 500;
  border-radius: 5px;
  background-color: ${colors.btnSecondary};
  color: white;
  cursor: pointer;
  ${mobile({ fontSize: "10px" })}
`;

const BtnHapus = styled.button`
  border: none;
  padding: 10px 20px 10px;
  font-family: ${fonts.montserrat};
  font-weight: 500;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;
  ${mobile({ fontSize: "10px" })}
`;

const HapusUndangan = () => {
  const { user } = useSelector((state) => state.auth);
  const { goals } = useSelector(
    (state) => state.goals
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLihat = () => {
    if (!goals[0]) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Maaf undangan Anda balum ada!',
          footer: 'Segera buat undangan terlebih dahulu!!!'
        })
      } else {
        navigate(`/blue-flower/:namaTamu/${goals[0]._id}`);
      }
  };

  const onHapus = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Semua Data Undangan Anda akan terhapus!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Delete!",
          "Your undangan has been delete.",
          "success",
          dispatch(deleteGoal(goals[0]._id)),
          navigate("/dashboard")
        );
      }
    });
  };

  return (
    <Container>
      <BtnLihat onClick={onLihat}>Lihat Undangan</BtnLihat>
      <BtnHapus onClick={onHapus}>Hapus Undangan</BtnHapus>
    </Container>
  );
};

export default HapusUndangan;
