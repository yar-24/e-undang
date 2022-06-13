import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getGoals } from "../../../../config/redux/features/goals/goalSlice";
import { ThemeContext } from "../../../../context";
import { ImgWelcome } from "../../../../img";
import { colors, fonts, mobile } from "../../../../utils";
import HapusUndangan from "../../HapusUndangan";
import Jarak from "../../Jarak";
import Loading from "../../Loading";

const Container = styled.div`
  display: flex;
  width: 80%;
  max-width: 1440px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  padding: 50px;
  top: 25vh;
  right: 5vw;
  margin: 0 30px 0;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  ${mobile({
    position: "initial",
    flexDirection: "column",
    width: "80%",
    height: "50%",
    marginLeft: 0,
    margin: "15vh 20px 0",
    padding: "0px 20px 0px",
    zIndex: "1",
  })}
`;

const Top = styled.div`
  margin-top: 10px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  ${mobile({ width: "100px", height: "100px" })}
`;

const Ucapan = styled.p`
  font-family: ${fonts.montserrat};
  font-size: 20px;
  font-weight: 500;
  ${mobile({ fontSize: "14px" })}
`;

const Text = styled.p`
  font-family: ${fonts.montserrat};
  ${mobile({ fontSize: "12px" })}
`;

const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 5vh;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-family: ${fonts.montserrat};
  font-weight: 600;
  background-color: ${colors.btnSecondary};
  ${mobile({ fontSize: "12px", width: "30vw", padding: 0 })}
`;

const Dashboard = ({ width }) => {
  const [getGoal, setGetGoal] = useState("");

  const dispatch = useDispatch();

  const { user, isLoading } = useSelector((state) => state.auth);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    dispatch(getGoals())
      .then((res) => {
        const data = res.payload[0];
        setGetGoal(data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, [dispatch]);

  if (isLoading) {
    return (
      <Loading type={"balls"} color={"#FFFFFF"} height={"20%"} width={"20%"} />
    );
  }

  return (
    <Container
      style={{
        color: darkMode ? "#ffffff" : "#333",
        backgroundColor: darkMode ? "#555" : "#FFFFFF",
        width: width,
        transition: "all 1s ease",
      }}
    >
      {getGoal? (
        <>
          <Top>
            <Image src={ImgWelcome} alt="welcome" />
            <Ucapan>Terima Kasih, {user.name} 🙏</Ucapan>
          </Top>
          <Text>
            Terima Kasih telah membuat undangan di website Kami, Kami pasti
            mendoakan kelancaran acara Anda, semoga pernikahan Anda SAMAWA,
            aamiiin...
          </Text>
          <Jarak height={10} />
          <HapusUndangan />
        </>
      ) : (
        <>
          <Top>
            <Image src={ImgWelcome} alt="welcome" />
            <Ucapan>Selamat Datang, {user.name} 👋</Ucapan>
          </Top>
          <Text>
            Yuk, isikan data undangan kamu untuk keperluan undangan online. Data
            undangan dapat diubah kapan pun dan berapa pun.
          </Text>
          <Jarak height={10} />
          <Button to="/pilih-tema">Buat Undangan</Button>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
