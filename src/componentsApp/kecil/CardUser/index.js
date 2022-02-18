import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tombol } from "..";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  background-color: blue;
  text-align: center;
  border-radius: 10px;
  margin: 20px;
`;
const Name = styled.h1``;
const Tanggal = styled.p``;
const ContainerEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const Edit = styled.p`
  font-weight: bold;
  margin: 0px;
  margin-right: 12px;
  color: #03a8f4;
  cursor: pointer;
`;
const Delete = styled.p`
  font-weight: bold;
  margin: 0px;
  margin-left: 12px;
  color: #e91e63;
  cursor: pointer;
`;

const CardUser = (props) => {
  const { nama, date } = props;

  return (
    <>
      <CardContainer>
        <Name>{nama}</Name>
        <ContainerEdit>
          <Link to={`/create-undangan/${props.id}`}>
            <Edit>Edit</Edit>
          </Link>
          |
          <Link to={`/create-undangan/${props.id}`}>
            <Delete>Delete</Delete>
          </Link>
        </ContainerEdit>
        <Tanggal>{date}</Tanggal>
        <Link to={`/:username/${props.nama}/${props.id}`}>
          <Tombol title="Click" />
        </Link>
      </CardContainer>
    </>
  );
};

export default CardUser;
