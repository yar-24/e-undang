import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CardUser } from "../../componentsApp/kecil";
import { setDataUndang } from "../../config/redux/action";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const User = () => {
  const dispatch = useDispatch();
  const { dataUndang } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(setDataUndang());
  }, [dispatch]);

  return (
    <Container>
      {dataUndang.map((item) => (
        <CardUser nama={item.nama} date={item.createdAt} key={item._id} id={item._id} />
      ))}
    </Container>
  );
};

export default User;
