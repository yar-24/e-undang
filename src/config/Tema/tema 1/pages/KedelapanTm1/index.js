import React, {useState } from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../../../utils";
import { InputanTm1, JarakTm1, KomentarTm1 } from "../../components";
import { Background5 } from "../../assets";
import { Zoom } from "react-reveal";
import { mobile } from "../../../../../responsive";
import { useDispatch, useSelector } from "react-redux";
// import { createComment } from "../../../../redux/features/goals/goalSlice";
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../../../../componentsApp";
import { createComment } from "../../../../redux/features/goals/goalService";

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

const ContainerInput = styled.form``;

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

const KedelapanTm1 = ({ page, komentar }) => {
  const [nameComment, setNameComment] = useState("");
  const [comment, setComment] = useState("");

  const { isLoading } = useSelector(
    (state) => state.goals
  );

  const dispatch = useDispatch()
  const params = useParams()

  const id = params.id

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
      setNameComment("");
      setComment("");

      dispatch(createComment(data, id))
    }
  };

  if(isLoading){
    <Loading/>
  }

  return (
    <Background id={page}>
      <Zoom bottom>
        <Container>
          <ContainerText>
            <Title>Ucapkan Sesuatu</Title>
            <Text>Berikan ucapan & Doa Restu Kalian</Text>
          </ContainerText>
          <ContainerInput onSubmit={kirimComment}>
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
            <Kirim >Kirim Ucapan</Kirim>
          </ContainerInput>
          <JarakTm1 height={20} />
          <KomentarTm1 data={komentar.comments} />
        </Container>
      </Zoom>
    </Background>
  );
};

export default KedelapanTm1;
