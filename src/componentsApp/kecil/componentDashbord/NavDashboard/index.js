import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LogoSvg } from "../../../../img";
import { colors, fonts, mobile } from "../../../../utils";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { AiOutlineShopping } from "react-icons/ai";
import Dropdown from "../../Navbar/Dropdown";
import Toggle from "../../Toggle.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../../../context";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 5;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 10vh;
  background-color: #fff;
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25));
  ${mobile({ height: "50px" })}
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ContainerLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  ${mobile({ width: "30px", height: "30px" })}
`;

const TextLogo = styled.p`
  font-family: ${fonts.montserrat};
  font-size: 24px;
  font-weight: bold;
  ${mobile({ fontSize: "12px", display: "none" })}
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const ContainerPayment = styled.div`
display: flex ;
justify-content:center ;
align-items: center ;
margin-right:  20px;
width: 30px ;
height: 30px;
border-radius: 50% ;
background-color: ${colors.btnSecondary} ;
cursor: pointer;
`

const WrapperRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8vw;
`;

const ContainerImg = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0px 20px 0;
  cursor: pointer;
  ${mobile({ margin: "0px 5px 0px" })}
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  ${mobile({ height: "40px", width: "40px" })}
`;

const Username = styled.p`
  font-family: ${fonts.montserrat};
  font-size: 18px;
  font-weight: 500;
  ${mobile({ fontSize: "12px" })}
`;

const ContainerMenuUser = styled.div`
  cursor: pointer;
`;

const NavDasboard = (props) => {
  const { handleClicks, clicks, handleClickMenu, click } = props;

  const [orderId, setOrderId] = useState("");
  

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleProfile = () => {
    navigate(`/profile/${user._id}`);
  };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    axios.get("http://localhost:5000/api/order",{
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    .then((res) => {
      const id = res.data[0].id
      setOrderId(id)
    })
    .catch((err) => {
      // console.log("err");
    })
  })

  const handleNotification = () => {
    navigate(`/notification/${orderId}`)
  }


  return (
    <Container
      style={{
        backgroundColor: darkMode ? "#333" : "#FFF",
        color: darkMode ? "#FFF" : "#333",
        transition: "all 1s ease",
      }}
    >
      <Left>
        <Dropdown
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            color: "#fff",
            backgroundColor: "rgb(219, 15, 112)",
            height: "30px",
            width: "40px",
            margin: "0 20px 0",
            cursor: "pointer",
          }}
          size={20}
          handleClick={handleClicks}
          click={clicks}
        />
        <ContainerLogo to="/">
          <Logo src={LogoSvg} />
          <TextLogo
            style={{
              color: darkMode ? "#FFF" : "#333",
              transition: "all 1s ease",
            }}
          >
            E - Undang
          </TextLogo>
        </ContainerLogo>
      </Left>
      <Right>
      {orderId ? 
        <ContainerPayment onClick={handleNotification}>
          <AiOutlineShopping size={20} color={"#ffffff"} />
        </ContainerPayment> : null
      }
        <WrapperRight>
          <Username>{user.name}</Username>
          <ContainerImg onClick={handleProfile}>
            {user.idPicProfile ? (
              <Image
                src={"https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                alt="userpicture"
              />
            ) : (
              <Image src={user.picProfile} alt="userpicture" />
            )}
          </ContainerImg>
          <ContainerMenuUser onClick={handleClickMenu}>
            {click ? (
              <TiArrowSortedUp size={15} />
            ) : (
              <TiArrowSortedDown size={15} />
            )}
          </ContainerMenuUser>
        </WrapperRight>
      </Right>
      <Toggle />
    </Container>
  );
};

export default NavDasboard;
