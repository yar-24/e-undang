import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ipon, mobile } from '../../../../../responsive';
import { colors } from '../../../../../utils';

const Timer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${mobile({margin: "0"})};
  ${ipon({ marginBottom: "20px" })};
`;

const Container = styled.div`
display: flex;
  border: 1px solid ${colors.primary};
  border-radius: 3px;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

const Wrapper = styled.section`
  background-color: ${colors.secondary};
  width: 100px;
  height: 80px;
  margin: 10px;
  ${mobile({ width: "70px", height: "55px" })};
  ${ipon({ width: "60px" })};
`;
const Waktu = styled.p`
  font-size: 30px;
  font-family: "Abril Fatface", cursive;
  margin-top: 10px;
  margin-bottom: -1px;
  ${mobile({ fontSize: "18px" })};
`;
const Text = styled.p`
  color: black;
  font-size: 15px;
  font-family: "Abril Fatface", cursive;
  margin: 0;
  ${mobile({ fontSize: "12px" })};
  ${ipon({ marginBottom: "20px" })};
`;

function JamTm1({jam}) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(jam).getTime();
    interval = setInterval(() => {  
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    const someref = interval.current;
    startTimer();
    return () => {
      clearInterval(someref);
    };
  });

  return (
    <Timer className="timer">
      <Container>
        <Wrapper>
          <Waktu>{timerDays}</Waktu>
          <Text>Hari</Text>
        </Wrapper>
        <Wrapper>
          <Waktu>{timerHours}</Waktu>
          <Text>Jam</Text>
        </Wrapper>
        <Wrapper>
          <Waktu>{timerMinutes}</Waktu>
          <Text>Menit</Text>
        </Wrapper>
        <Wrapper>
          <Waktu>{timerSeconds}</Waktu>
          <Text>Detik</Text>
        </Wrapper>
      </Container>
    </Timer>
  );
}

export default JamTm1;
