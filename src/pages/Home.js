import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
`;

const Home = () => {
  return (
    <>
      <Link to="/contoh-tema-1/Nama Penerima">
        <Button>pencet ini yaa</Button>
      </Link>
    </>
  );
};

export default Home;
