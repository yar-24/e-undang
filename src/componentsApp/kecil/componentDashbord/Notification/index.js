import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { colors, fonts, mobile } from "../../../../utils";
import { Loading, Tombol } from "../../index";
import { useNavigate } from "react-router-dom";
import { deletePay } from "../../../../config/redux/features/pay/paySlice";
import { AiOutlineCopy } from "react-icons/ai";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  align-items: center;
  width: 50%;
  margin-top: 30vh;
  padding: 10px;
  border-radius: 5px;
  background-color: #333;
  color: #ffffff;
  -webkit-box-shadow: 0px 0px 19px -5px #000000;
  box-shadow: 0px 0px 19px -5px #000000;
  ${mobile({ marginTop: "15vh", width: "80%" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
  ${mobile({ height: "50px" })}
`;

const Logo = styled.h1`
  font-family: ${fonts.fontRoboto};
  margin: 0;
  ${mobile({ fontSize: "14px" })}
`;

const Title = styled.h3`
  font-family: ${fonts.josefinSans};
  margin: 0;
  ${mobile({ fontSize: "12px" })}
`;

const Bottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin-bottom: 30px;
  padding: 10px;
  background-color: #888;
  border-radius: 5px;
`;

const Nama = styled.p`
  font-family: ${fonts.josefinSans};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  ${mobile({ fontSize: "12px" })}
`;

const StatusContainerPending = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 12px 6px;
  border-radius: 5px;
  margin: 5px;
  background-color: orange;
  ${mobile({ fontSize: "12px" })}
`;

const StatusContainerExpert = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 12px 6px;
  border-radius: 5px;
  margin: 5px;
  background-color: red;
  ${mobile({ fontSize: "12px" })}
`;

const StatusContainerSuccess = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 12px 6px;
  border-radius: 5px;
  margin: 5px;
  background-color: green;
  ${mobile({ fontSize: "12px" })}
`;

const Status = styled.p`
  margin: 0;
`;

const ContainerMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  ${mobile({ width: "80%", marginTop: "20px" })}
`;

const Waktu = styled.p`
  ${mobile({ fontSize: "10px" })}
`;

const Amount = styled.p`
  font-weight: 700;
  ${mobile({ fontSize: "12px" })}
`;

const Note = styled.p`
  margin: 5px 10px 5px;
  text-align: center;
  font-size: 12px;
`;

const VitualNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ fontSize: "12px" })}
`;

const VaNumber = styled.p`
  margin-right: 20px;
  text-transform: uppercase ;
  ${mobile({ marginRight: "10px" })}
`;

const ContainerCopy = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ContainerVa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Ahref = styled.a`
  background-color: ${colors.btnSecondary};
  color: #ffffff;
  width: 50%;
  text-align: center;
  text-decoration: none;
  padding: 5px;
  margin: 10px;
`;

const Notification = () => {
  const [Bridone, BrisetDone] = useState(false);
  const [order, setOrder] = useState("");
  const [deleteOrder, setDeleteOrder] = useState("");
  const [orderId, setOrderId] = useState("");
  const [vaBriBca, setVaBriBca] = useState("");
  const [vaPermata, setVaPermata] = useState("");

  const { user, isLoading } = useSelector((state) => state.auth);
  const { goals } = useSelector((state) => state.goals);
  //hshsh
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/order", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        const id = res.data[0].id;
        const idDelete = res.data[0]._id;
        setOrderId(id);
        setDeleteOrder(idDelete);
      })
      .catch((err) => {
        console.log(err);
      });

    if (orderId) {
      axios
        .get(`http://localhost:5000/api/order/status/${orderId}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          if (res.data.data.va_numbers) {
            const bankBriBca = res.data.data.va_numbers[0];
            setVaBriBca(bankBriBca);
          }
          if (res.data.data.permata_va_number) {
            const va_Permata = res.data.data.permata_va_number;
            setVaPermata(va_Permata);
          }
          const data = res.data.data;
          setOrder(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [orderId, user]);

  if (isLoading) {
    <Loading />;
  }

  if (Bridone) {
    setTimeout(() => {
      BrisetDone(false);
    }, [3000]);
  }

  const handleCreateUndangan = () => {
    navigate("/data-premium");
  };

  const handleViewUndangan = () => {
    navigate(`/blue-flower/:namaTamu/${goals[0]._id}`);
  };

  const handleDeletePay = () => {
    dispatch(deletePay(deleteOrder)).then((res) => {
      navigate("/dasboard");
    });
  };

  return (
    <>
      <Card>
        <Top>
          <Logo>E-Undang</Logo>
          <Title>Riwayat Pembayaran</Title>
        </Top>
        <hr style={{ width: "90%" }} />
        {(order.transaction_status === "expire" && (
          <Bottom>
            <Nama style={{ color: "red" }}>Order Gagal!</Nama>
            <ContainerMiddle>
              <Waktu>{order.transaction_time} </Waktu>
              <Amount>Rp. {order.gross_amount}</Amount>
            </ContainerMiddle>
            <StatusContainerExpert>
              <Status>{order.transaction_status}</Status>
            </StatusContainerExpert>
            <Tombol
              title="Hapus Notifikasi"
              style={{ backgroundColor: "rgb(219, 15, 112)", width: "50%" }}
              onClick={handleDeletePay}
            />
          </Bottom>
        )) ||
          (order.transaction_status === "settlement" && (
            <Bottom>
              <Nama style={{ color: "green" }}>Berhasil dibayar!</Nama>
              <ContainerMiddle>
                <Waktu>{order.transaction_time} </Waktu>
                <Amount>Rp. {order.gross_amount}</Amount>
              </ContainerMiddle>
              <StatusContainerSuccess>
                <Status>{order.transaction_status}</Status>
              </StatusContainerSuccess>
              <ContainerVa>
                <VitualNumber>
                  <p style={{marginRight: "5px"}}>Va. Number</p>
                  <VaNumber>
                    {vaBriBca ? vaBriBca.bank : "Permata"} :{" "}
                    {vaBriBca.va_number}
                    {vaPermata}
                  </VaNumber>
                </VitualNumber>
              </ContainerVa>
              {!goals[0] ? (
                <Tombol
                  title="Buat Undangan"
                  style={{ backgroundColor: "rgb(219, 15, 112)", width: "50%" }}
                  onClick={handleCreateUndangan}
                />
              ) : (
                <Tombol title="Lihat Undangan" onClick={handleViewUndangan} />
              )}
              <Note>Terima kasih !!</Note>
            </Bottom>
          )) ||
          (order.transaction_status === "pending" && (
            <Bottom>
              <Nama style={{ color: "orange" }}>Belum dibayar!</Nama>
              <Note>Note: Silahkan cek Email Anda!</Note>
              <ContainerMiddle>
                <Waktu>{order.transaction_time}</Waktu>
                <Amount>Rp. {order.gross_amount}</Amount>
              </ContainerMiddle>
              <StatusContainerPending>
                <Status>{order.transaction_status}</Status>
              </StatusContainerPending>
              <ContainerVa>
                <VitualNumber>
                  <p style={{marginRight: "5px"}}>Va. Number</p>
                  <VaNumber>
                    {vaBriBca ? vaBriBca.bank : "Permata"} :{" "}
                    {vaBriBca.va_number}
                    {vaPermata}
                  </VaNumber>
                  <ContainerCopy
                    onClick={() =>
                      BrisetDone(
                        navigator.clipboard.writeText(vaBriBca || vaPermata)
                      )
                    }
                  >
                    <AiOutlineCopy />
                    {Bridone ? <p>Berhasil dicopy</p> : null}
                  </ContainerCopy>
                </VitualNumber>
                <Ahref href="https://mail.google.com/">Cek Email</Ahref>
              </ContainerVa>
              <Note>
                jika kalian sudah melakukan pembayaran silahkan di refresh!
              </Note>
            </Bottom>
          ))}
      </Card>
    </>
  );
};

export default Notification;
