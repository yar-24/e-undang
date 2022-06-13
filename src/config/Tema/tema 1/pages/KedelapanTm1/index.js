import React, {useState } from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../../../utils";
import { InputanTm1, JarakTm1, KomentarTm1 } from "../../components";
import { Background5 } from "../../assets";
import { Zoom } from "react-reveal";
import { mobile } from "../../../../../responsive";
import { useDispatch } from "react-redux";
import { createComment } from "../../../../redux/features/goals/goalSlice";
import Swal from 'sweetalert2'

const Background = styled.div`
  /* background-image: url(${Background5});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: 100%;
  width: 100%;
  height: 100vh;
  */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 50px;
  margin-top: 30px;
  margin-bottom: 100px;
  ${mobile({ marginTop: "15vh" })};
`;

const ContainerText = styled.div``;

const Title = styled.h1`
  font-family: ${fonts.secondary};
  color: ${colors.primary};
`;

const ContainerInput = styled.div``;

const Text = styled.h1``;

const TextArea = styled.textarea`
  padding: 10px;
`;

const Kirim = styled.button`
  text-decoration: none;
  border: none;
  border-radius: 10px;
  padding: 10px 30px 10px;
  background-color: ${colors.primary};
  color: white;
  :hover {
    color: black;
    background-color: ${colors.secondary};
  }
`;

const KedelapanTm1 = ({ page }) => {
  const [nameComment, setNameComment] = useState("");
  const [comment, setComment] = useState("");
  const [respon, setRespon] = useState(false);

  const dispatch = useDispatch()

  const kirimComment = () => {
    const data = new FormData();
    data.append("nameComment", nameComment);
    data.append("isiComment", comment);
    
    if ((!nameComment, !comment)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    } else {
      setRespon(true);
      setNameComment("");
      setComment("");

      dispatch(createComment(data))
      // console.log(data);
    }
  };

  return (
    <Background id={page}>
      <Zoom bottom>
        <Container>
          <ContainerText>
            <Title>Ucapkan Sesuatu</Title>
            <Text>Berikan ucapan & Doa Restu Kalian</Text>
          </ContainerText>
          <ContainerInput>
            <InputanTm1
              placeholder="Nama"
              value={nameComment}
              onChange={(e) => setNameComment(e.target.value)}
            />
            <JarakTm1 height={20} />
            <TextArea
              placeholder="Ucapkan Sesuatu"
              rows="4"
              cols="40"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <JarakTm1 height={30} />
            <Kirim onClick={() => kirimComment()}>Kirim Ucapan</Kirim>
            {respon && <Text>Terima kasih atas Ucapannya</Text>}
          </ContainerInput>
          <JarakTm1 height={20} />
          <KomentarTm1/>
        </Container>
      </Zoom>
    </Background>
  );
};

export default KedelapanTm1;
