import React from "react";
import styled from "styled-components";
import { LeftHomePage, RightHomePage } from "../../../componentsApp";
import { colors, mobile, tablet } from "../../../utils";

const Background = styled.div`
background: ${colors.pinkBgPrimary} ;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 600px ;
  max-width: 1440px ;
  ${mobile({ height: "100%" })}
  ${tablet({ height: "100%", padding: "20px 0 20px" })}
`;

const WrpperTransparent = styled.div`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.4px);
  -webkit-backdrop-filter: blur(9.4px);
  border: 1px solid rgba(255, 255, 255, 0.24);
  height: 80%;
  width: 80%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  ${mobile({ padding: "20px", margin: "10px" })}
  ${tablet({ padding: "10px 40px 10px" })}
`;

const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100% ;
  height: 100% ;
  ${mobile({ flexDirection: "column", justifyContent: "center" })}
`;

const Right = styled.div`
  width: 45%;
  height:100% ;
  ${mobile({ width: "100%" })}
`;

const Left = styled.div`
  width: 45%;
  height:100% ;
  ${mobile({ width: "100%" })}
`;

const Home = ({ page, load }) => {

  return (
      <Background id={page}>
        <WrpperTransparent>
          <ContainerHome>
            <Right>
              <RightHomePage />
            </Right>
            <Left>
              <LeftHomePage dashboard={load} />
            </Left>
          </ContainerHome>
        </WrpperTransparent>
      </Background>
  );
};

export default Home;
