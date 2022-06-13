import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import styled from "styled-components";
import { mobile } from "../../../../../responsive";
import { colors } from "../../../../../utils";

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
  animation: rotation 3s infinite;
  @keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
  ${mobile({ marginBottom: "10vh" })};
`;

const MusikTm1 = ({ music }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef()

  const play = () => {
    const audio = audioRef.current

    if(!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if(isPlaying){
      setIsPlaying(false)
      audio.pause()
    }
  };

  return (
    <Container>
      <Button onClick={play}>
      {isPlaying ? <BsFillPlayFill /> : <BsPauseFill />}
      <audio ref={audioRef}  src={music} ></audio>
      </Button>
    </Container>
  );
};

export default MusikTm1;
