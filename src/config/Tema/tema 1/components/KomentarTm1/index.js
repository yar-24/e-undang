import React from "react";
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
  font-size: 12px;
  text-align: right;
  ${mobile({ fontSize: "8px" })};
`;

const Comment = styled.p`
  font-weight: 700;
  margin-top: 5px;
  font-family: ${fonts.josefinSans} ;
`;

const KomentarTm1 = ({ data }) => {
  //  const prevDate = moment(previousDate).fromNow();

  const timeAgo = (prevDate) => {
    const diff = Number(new Date()) - prevDate;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
      case diff < minute:
        const seconds = Math.round(diff / 1000);
        return `${seconds} ${seconds > 1 ? "detik" : "detik"} yang lalu`;
      case diff < hour:
        return Math.round(diff / minute) + " menit yang lalu";
      case diff < day:
        return Math.round(diff / hour) + " jam yang lalu";
      case diff < month:
        return Math.round(diff / day) + " hari yang lalu";
      case diff < year:
        return Math.round(diff / month) + " bulan yang lalu";
      case diff > year:
        return Math.round(diff / year) + " tahun yang lalu";
      default:
        return "";
    }
  };

  return (
    <>
      <ContainerComments>
        <Text>Ucapan & Doa</Text>
        {data?.reverse().map((item) => (
          <WrapperComment key={item._id}>
            <TopComment>
              <NamaComment>{item.nameComment}</NamaComment>
              <Tanggal>{timeAgo(new Date(item.date).getTime())}</Tanggal>
            </TopComment>
            <Comment>{item.isiComment}</Comment>
          </WrapperComment>
        ))}
      </ContainerComments>
    </>
  );
};

export default KomentarTm1;
