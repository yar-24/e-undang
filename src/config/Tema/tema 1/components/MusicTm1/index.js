import React, { useState, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import styled from "styled-components";
import { mobile } from '../../../../../responsive';
import { colors } from '../../../../../utils';

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Container = styled.div`
  position: fixed;
  margin: 40% 50px 0;
  right: 0;
  top: 0;
  z-index: 5;
  ${mobile({ margin: "75vh 40px 0" })};
`;
const Button = styled.button`
  background-color: ${colors.primary}; /* Green */
  border: none;
  color: white;
  padding: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  ${mobile({ marginBottom: "10vh" })};
`;

const MusicTm1 = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <Container>
      <Button onClick={toggle}>
        {playing ? <BsFillPlayFill /> : <BsPauseFill />}
      </Button>
    </Container>
  );
};

export default MusicTm1;
