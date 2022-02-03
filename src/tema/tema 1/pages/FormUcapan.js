import React, { useRef, useState } from "react";
import styled from "styled-components";
import { colors, fonts } from "../../../utils";
import Inputan from "../components/Inputan";
import { Background5 } from "../assets";
import emailjs from "@emailjs/browser";
import { Zoom } from "react-reveal";
import { mobile } from "../../../responsive";

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

const Text = styled.p``;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-top: 10px;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid ${colors.secondary};
  font-family: ${fonts.primary};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: ${colors.primary};
  color: white;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-family: ${fonts.primary};
  cursor: pointer;
  :hover {
    background-color: ${colors.secondary};
    color: black;
  }
`;


const FormUcapan = ({ id }) => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_115z7bt",
        "template_yjn656v",
        form.current,
        "user_1DJ0HZ5yMVim8LVFlpNFA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };



  return (
    <Background id={id}>
      <Zoom bottom>
        <Container>
          <ContainerText>
            <Title>Ucapkan Sesuatu</Title>
            <Text>Berikan ucapan & Doa Restu Kalian</Text>
          </ContainerText>
          <ContainerForm ref={form} onSubmit={sendEmail}>
            <Inputan
              placeholder="Masukan Nama"
              type="text"
              name="nama_pengirim"
            />
            <Inputan
              placeholder="Masukan Email"
              type="email"
              name="email_pengirim"
            />
            <Inputan
              placeholder="Masukan No.Telp"
              type="tel"
              name="noHp_pengirim"
            />
            <Inputan
              placeholder="Daftar Kehadiran"
              type="text"
              name="kehadiran"
            />
            <TextArea
              placeholder="Ucapkan Sesuatu"
              rows="4"
              cols="35"
              name="ucapan"
            />
            <Button>kirim Ucapan</Button>
            {done && "Pesan Terkirim, Terima Kasih!!"}
          </ContainerForm>
        </Container>
      </Zoom>
    </Background>
  );
};

export default FormUcapan;
