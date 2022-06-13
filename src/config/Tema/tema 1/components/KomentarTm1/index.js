import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../../../../../responsive";
import { colors, fonts } from "../../../../../utils";

const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  overflow-x: hidden;
  padding: 20px;
  border-radius: 20px;
  height: 80vh;
  width: 35vw;
  background-color: ${colors.secondary};
  ${mobile({ width: "80%", height: "50vh", padding: "20px 10px 20px" })};
`;

const Text = styled.p`
  margin: 0 0 10px;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: ${fonts.secondary};
`;

const WrapperComment = styled.div`
  width: 30vw;
  height: auto;
  padding: 10px 15px 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.83);
  filter: drop-shadow(0px 11px 4px rgba(0, 0, 0, 0.25));
  ${mobile({ width: "80%" })};
`;

const TopComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NamaComment = styled.p`
  text-align: left;
  font-weight: 500;
`;

const Tanggal = styled.p`
  text-align: right;
`;

const Comment = styled.p`
  font-weight: 700;
  margin-top: 5px;
`;

const KomentarTm1 = () => {
  const [komen, setKomen] = useState([]);

  const { goals, isLoading } = useSelector((state) => state.goals);

  useEffect(() => {
    setKomen(goals[0].comments);
  }, [goals]);

  return (
    <>
      {isLoading ? (
        <Loading type={"soin"} color={"#FFFFFF"} height={"20%"} width={"20%"} />
      ) : (
        <ContainerComments>
          <Text>Ucapan & Doa</Text>
          {komen.map((item) => (
            <WrapperComment key={item._id}>
              <TopComment>
                <NamaComment>{item.nameComment}</NamaComment>
                <Tanggal>{new Date(item.date).toLocaleDateString()}</Tanggal>
              </TopComment>
              <Comment>{item.isiComment}</Comment>
            </WrapperComment>
          ))}
        </ContainerComments>
      )}
    </>
  );
};

export default KomentarTm1;
