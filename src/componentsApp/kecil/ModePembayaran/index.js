import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SiShopify } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { postPay } from "../../../config/redux/features/pay/paySlice";
import { BCA, BNI, BRI, Permata } from "../../../img";
import { colors, mobile } from "../../../utils";
import FormPembayaran from "../FormPembayaran";
import Jarak from "../Jarak";
import Loading from "../Loading";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  /* background-color: red ; */
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.4px);
`;

const Card = styled.div`
  position: relative;
  width: 370px;
  height: 544px;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  ${mobile({width: "80%"})}
`;

const Title = styled.h1`
  font-size: 21px;
  ${mobile({marginBottom: "30px"})}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  ${mobile({width: "80%"})}
`;

const Mode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: ${colors.pinkTerang};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0px 20px 0px;
`;

const ArrowDown = styled.div`
  margin-right: 20px;
`;

const Text = styled.h5``;

const Bank = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px 0px;
  height: 60px;
  border-bottom: 1px solid ${colors.abuGelap};
  cursor: pointer;
  :hover {
    background-color: ${colors.abu};
  }
`;

const Image = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;

const Close = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  cursor: pointer;
`;

const ModePembayaran = ({ handleClose }) => {
  const { user, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [onClick, setOnClick] = useState(false);
  const [onClickPembayaran, setOnClickPembayaran] = useState(false);
  const [srcBank, setSrcBank] = useState();
  const [bankTransfer, setBankTransfer] = useState("");
  const [bank, setBank] = useState("");
  const [closeMode, setCloseMode] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleBank = () => {
    setOnClick(true);

    if (onClick === true) {
      setOnClick(false);
    }
  };

  const handleBni = () => {
    setOnClickPembayaran(true);
    setOnClick(false);
    setCloseMode(false);
    setBankTransfer("bank_transfer");
    setBank("bni");
    setSrcBank(BNI);
  };

  const handleBri = () => {
    setOnClickPembayaran(true);
    setOnClick(false);
    setCloseMode(false);
    setBankTransfer("bank_transfer");
    setBank("bri");
    setSrcBank(BRI);
  };

  const handleBca = () => {
    setOnClickPembayaran(true);
    setOnClick(false);
    setCloseMode(false);
    setBankTransfer("bank_transfer");
    setBank("bca");
    setSrcBank(BCA);
  };

  const handlePermata = () => {
    setOnClickPembayaran(true);
    setOnClick(false);
    setCloseMode(false);
    setBankTransfer("bank_transfer");
    setBank("permata");
    setSrcBank(Permata);
  };

  const parameter = {
    payment_type: bankTransfer,
    transaction_details: {
      order_id: new Date().getTime(),
      gross_amount: 119000,
    },
    bank_transfer: {
      bank: bank,
    },
    nama: user.name,
    customer_details: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
    },
  };

  const onSubmit = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "Notifikasi Pembayaran akan terkirim di Email dan halaman Notification!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, konfirmasi!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Sukses!',
          'Terkirim di Email dan Notification.',
          'success'
        )
        dispatch(postPay(parameter))
        .then((res) => {
          const id = res.payload.data.id;
          navigate(`/notification/${id}`);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    })

  };

  const onBack = () => {
    setCloseMode(true)
    setOnClickPembayaran(false)
  }

  return (
    <Container>
      <Card>
        <Close onClick={handleClose}>
          <AiFillCloseCircle size={25} color="red" />
        </Close>
        <Title>Pilih Mode Pembayaran</Title>
        {onClickPembayaran && (
          <FormPembayaran
            src={srcBank}
            handleBack={onBack}
            handleClick={onSubmit}
            valueFirstName={firstName}
            onChangeFirstName={(e) => setFirstName(e.target.value)}
            valueLastName={lastName}
            onChangeLastName={(e) => setLastName(e.target.value)}
            valueEmail={email}
            onChangeEmail={(e) => setEmail(e.target.value)}
            valuePhone={phone}
            onChangePhone={(e) => setPhone(e.target.value)}
          />
        )}
        {closeMode && (
          <>
            <Mode onClick={handleBank}>
              <Left>
                <Icon style={{ border: "1px solid orange" }}>
                  <BiTransfer color="orange" />
                </Icon>
                <Text>Transfer Bank</Text>
              </Left>
              <ArrowDown>
                {onClick ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </ArrowDown>
            </Mode>
            {onClick && (
              <>
                <Jarak height={10} />
                <Bank onClick={handleBni}>
                  <Image src={BNI} />
                  <Text style={{ fontSize: "12px" }}>Bank BNI</Text>
                </Bank>
                <Bank onClick={handleBri}>
                  <Image src={BRI} />
                  <Text style={{ fontSize: "12px" }}>Bank BRI</Text>
                </Bank>
                <Bank onClick={handleBca}>
                  <Image src={BCA} />
                  <Text style={{ fontSize: "12px" }}>Bank BCA</Text>
                </Bank>
                <Bank onClick={handlePermata}>
                  <Image src={Permata} />
                  <Text style={{ fontSize: "12px" }}>Bank Permata</Text>
                </Bank>
              </>
            )}
            <Jarak height={20} />
            <Mode>
              <Left>
                <Icon style={{ border: "1px solid red" }}>
                  <SiShopify color="red" />
                </Icon>
                <Text>ShopeePay</Text>
              </Left>
            </Mode>
          </>
        )}
      </Card>
    </Container>
  );
};

export default ModePembayaran;
