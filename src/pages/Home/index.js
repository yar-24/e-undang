import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 50px;
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
      <Link to="/posts">
        <Button>LIhat User</Button>
      </Link>
      <Link to="/create-undangan">
        <Button>Upload Undangan</Button>
      </Link>
    </Container>
  );
};

export default Home;
