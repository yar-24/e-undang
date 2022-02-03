import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  margin-bottom: 20px;
`;
const Button = styled.button``

const Home = () => {
  return (
    <Container>
      <Link to="/contoh-tema-1/Nama Penerima">
        <Button>Contoh Tema 1</Button>
      </Link>
      <Link to="/contoh-tema-2/Nama Penerima">
        <Button>Contoh Tema 2</Button>
      </Link>
    </Container>
  );
};

export default Home;
