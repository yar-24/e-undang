import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { colors, fonts, mobile } from "../../../../utils";
import { FiSave } from "react-icons/fi";
import {
  FormAkad,
  FormDompet,
  FormGaleriMusik,
  FormPria,
  FormResepsi,
  FormWanita,
} from "../../componentForm";
import {
  createGoal,
  getGoals,
  updateGoal,
} from "../../../../config/redux/features/goals/goalSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { ThemeContext } from "../../../../context";
import Loading from "../../Loading";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerData = styled.div`
  display: flex;
  height: 1080px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  position: absolute;
  top: 25vh;
  right: 5vh;
  margin-left: 30px;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  ${mobile({
    position: "initial",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginLeft: 0,
    padding: "20px 0 20px",
    zIndex: "1",
  })}
`;

const ContainerAkad = styled.div`
  display: flex;
  height: 600px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  position: absolute;
  top: 1400px;
  right: 5vh;
  margin-left: 30px;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  ${mobile({
    position: "initial",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginLeft: 0,
    marginTop: "30px",
    padding: "20px 0 20px",
    zIndex: "1",
  })}
`;

const ContainerDompet = styled.div`
  display: flex;
  height: 450px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  position: absolute;
  top: 2100px;
  right: 5vh;
  margin-left: 30px;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  ${mobile({
    position: "initial",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginLeft: 0,
    marginTop: "30px",
    padding: "20px 0 20px",
    zIndex: "1",
  })}
`;

const ContainerGaleri = styled.div`
  display: flex;
  height: 450px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  position: absolute;
  top: 2650px;
  right: 5vh;
  margin-left: 30px;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  ${mobile({
    position: "initial",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginLeft: 0,
    marginTop: "30px",
    padding: "20px 0 20px",
    /* height: "1530px",
    padding: "10px",
    marginLeft: "0",
    top: "15vh",
    right: "10px", */
    zIndex: "1",
  })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3200px;
  right: 1vh;
  width: 100%;
  height: 10vh;
  ${mobile({ position: "initial", margin: "20px" })}
`;

const ContainerBtnSave = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-radius: 5px;
  background-color: ${colors.btnSecondary};
  color: #fff;
  border: none;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
  ${mobile({ width: "40%", height: "50px" })}
`;

const Label = styled.p`
  margin-left: 20px;
  font-family: ${fonts.montserrat};
  font-size: 20px;
  ${mobile({ fontSize: "18px" })}
`;

const PremiumDashboard = ({ styleBtn, width, tombol }) => {
  const dispatch = useDispatch();
  const postId = useParams();
  const navigate = useNavigate();

  // const { user } = useSelector((state) => state.auth);

  const [isUpdate, setIsUpdate] = useState(false);
  const [data, setData] = useState("");

  //USE STATE PRIA
  const [photoCowo, setPhotoCowo] = useState("");
  const [namaLkpCowo, setNamaLkpCowo] = useState("");
  const [namaPglCowo, setNamaPglCowo] = useState("");
  const [namaAyahCowo, setNamaAyahCowo] = useState("");
  const [namaIbuCowo, setNamaIbuCowo] = useState("");
  const [urutanAnakCowo, setUrutanAnakCowo] = useState("");
  const [linkIGCowo, setLinkIGCowo] = useState("");
  const [linkFBCowo, setLinkFBCowo] = useState("");

  //USE STATE WANITA
  const [photoCewe, setPhotoCewe] = useState("");
  const [namaLkpCewe, setNamaLkpCewe] = useState("");
  const [namaPglCewe, setNamaPglCewe] = useState("");
  const [namaAyahCewe, setNamaAyahCewe] = useState("");
  const [namaIbuCewe, setNamaIbuCewe] = useState("");
  const [urutanAnakCewe, setUrutanAnakCewe] = useState("");
  const [linkIGCewe, setLinkIGCewe] = useState("");
  const [linkFBCewe, setLinkFBCewe] = useState("");

  //AKAD
  const [tglAkad, setTglAkad] = useState("");
  const [waktuAkad, setWaktuAkad] = useState("");
  const [alamatAkad, setAlamatAkad] = useState("");
  const [linkAlmtAkad, setLinkAlmtAkad] = useState("");

  //RESEPSI
  const [tglResepsi, setTglResepsi] = useState("");
  const [waktuResepsi, setWaktuResepsi] = useState("");
  const [alamatResepsi, setAlamatResepsi] = useState("");
  const [linkAlmtResepsi, setLinkAlmtResepsi] = useState("");

  //DOMPET DIGITAL
  const [namaBank, setNamaBank] = useState("");
  const [noRek, setNoRek] = useState("");
  const [atasNamaBank, setAtasNamaBank] = useState("");
  const [namaDompet, setNamaDompet] = useState("");
  const [noHp, setNoHp] = useState("");
  const [atasNamaDompet, setAtasNamaDompet] = useState("");

  //GALERI
  const [galeri, setGaleri] = useState("");
  const [photoBerdua, setPhotoBerdua] = useState("");
  const [music, setMusic] = useState("");
  const [idYT, setIdYT] = useState("");
  const [linkLive, setLinkLive] = useState("");

  const [imagePreviewCowo, setImagePreviewCowo] = useState(null);
  const [imagePreviewCewe, setImagePreviewCewe] = useState(null);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (postId.id) {
      setIsUpdate(true);
    }

    dispatch(getGoals())
      .then((res) => {
        const update = res.payload[0];
        setData(update);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    if (isUpdate) {
      setNamaLkpCowo(data.namaLkpCowo);
      setNamaPglCowo(data.namaPglCowo);
      setImagePreviewCowo(data.photoCowo);
      setNamaPglCowo(data.namaPglCowo);
      setNamaAyahCowo(data.namaAyahCowo);
      setNamaIbuCowo(data.namaIbuCowo);
      setUrutanAnakCowo(data.urutanAnakCowo);
      setLinkIGCowo(data.linkIGCowo);
      setLinkFBCowo(data.linkFBCowo);
      setImagePreviewCewe(data.photoCewe);
      setNamaLkpCewe(data.namaLkpCewe);
      setNamaPglCewe(data.namaPglCewe);
      setNamaAyahCewe(data.namaAyahCewe);
      setNamaIbuCewe(data.namaIbuCewe);
      setUrutanAnakCewe(data.urutanAnakCewe);
      setLinkIGCewe(data.linkIGCewe);
      setLinkFBCewe(data.linkFBCewe);
      setTglAkad(data.tglAkad);
      setWaktuAkad(data.waktuAkad);
      setAlamatAkad(data.alamatAkad);
      setLinkAlmtAkad(data.linkAlmtAkad);
      setTglResepsi(data.tglResepsi);
      setWaktuResepsi(data.waktuResepsi);
      setAlamatResepsi(data.alamatResepsi);
      setLinkAlmtResepsi(data.linkAlmtResepsi);
      setNamaBank(data.namaBank);
      setNoRek(data.noRek);
      setAtasNamaBank(data.atasNamaBank);
      setNamaDompet(data.namaDompet);
      setNoHp(data.noHp);
      setAtasNamaDompet(data.atasNamaDompet);
      setMusic(data.music);
      setIdYT(data.idYT);
      setLinkLive(data.linkLive);
    }
  }, [data]);

  const onSubmit = () => {
    const data = new FormData();

    //PRIA
    data.append("photoCowo", photoCowo);
    data.append("namaLkpCowo", namaLkpCowo);
    data.append("namaPglCowo", namaPglCowo);
    data.append("namaAyahCowo", namaAyahCowo);
    data.append("namaIbuCowo", namaIbuCowo);
    data.append("urutanAnakCowo", urutanAnakCowo);
    data.append("linkIGCowo", linkIGCowo);
    data.append("linkFBCowo", linkFBCowo);
    setNamaLkpCowo("");
    setNamaPglCowo("");
    setNamaAyahCowo("");
    setNamaIbuCowo("");
    setUrutanAnakCowo("");
    setLinkIGCowo("");
    setLinkFBCowo("");

    //WANITA
    data.append("photoCewe", photoCewe);
    data.append("namaLkpCewe", namaLkpCewe);
    data.append("namaPglCewe", namaPglCewe);
    data.append("namaAyahCewe", namaAyahCewe);
    data.append("namaIbuCewe", namaIbuCewe);
    data.append("urutanAnakCewe", urutanAnakCewe);
    data.append("linkIGCewe", linkIGCewe);
    data.append("linkFBCewe", linkFBCewe);
    setNamaLkpCewe("");
    setNamaPglCewe("");
    setNamaAyahCewe("");
    setNamaIbuCewe("");
    setUrutanAnakCewe("");
    setLinkIGCewe("");
    setLinkFBCewe("");

    //AKAD
    data.append("tglAkad", tglAkad);
    data.append("waktuAkad", waktuAkad);
    data.append("alamatAkad", alamatAkad);
    data.append("linkAlmtAkad", linkAlmtAkad);
    setTglAkad("");
    setWaktuAkad("");
    setAlamatAkad("");
    setLinkAlmtAkad("");
    //RESEPSI
    data.append("tglResepsi", tglResepsi);
    data.append("waktuResepsi", waktuResepsi);
    data.append("alamatResepsi", alamatResepsi);
    data.append("linkAlmtResepsi", linkAlmtResepsi);
    setTglResepsi("");
    setWaktuResepsi("");
    setAlamatResepsi("");
    setLinkAlmtResepsi("");

    // //DOMPET DIGITAL
    data.append("namaBank", namaBank);
    data.append("noRek", noRek);
    data.append("atasNamaBank", atasNamaBank);
    data.append("namaDompet", namaDompet);
    data.append("noHp", noHp);
    data.append("atasNamaDompet", atasNamaDompet);
    setNamaBank("");
    setNoRek("");
    setAtasNamaBank("");
    setNamaDompet("");
    setNoHp("");
    setAtasNamaDompet("");

    //GALERI
    for (let i = 0; i < galeri.length; i++) {
      data.append("files", galeri[i]);
    }
    data.append("photoBerdua", photoBerdua);
    data.append("music", music);
    data.append("idYT", idYT);
    data.append("linkLive", linkLive);
    setMusic("");
    setPhotoBerdua("");
    setIdYT("");
    setLinkLive("");

    if (isUpdate) {
      Swal.fire({
        title: "Apa kamu benar ingin Mengdatad?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          // dispatch(dataGoals(data))
          Swal.fire("Saved!", "", "success", dispatch(updateGoal(data)));
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success", dispatch(createGoal(data)));
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  const onPhotoCowo = (e) => {
    const file = e.target.files[0];
    setPhotoCowo(file);
    setImagePreviewCowo(URL.createObjectURL(file));
  };

  const onPhotoCewe = (e) => {
    const file = e.target.files[0];
    setPhotoCewe(file);
    setImagePreviewCewe(URL.createObjectURL(file));
  };

  const onGetUndang = () => {
    navigate(`/blue-flower/:namaTamu/${user._id}`);
  };

  return (
    <>
      {isLoading ? (
        <Loading
          type={"balls"}
          color={"#FFFFFF"}
          height={"20%"}
          width={"20%"}
        />
      ) : (
        <Container>
          <ContainerData
            style={{
              color: darkMode ? "#ffffff" : "#333",
              backgroundColor: darkMode ? "#555" : "#FFFFFF",
              width: width,
              transition: "all 1s ease",
            }}
          >
            <FormPria
              onPhotoCowo={onPhotoCowo}
              imagePreview={imagePreviewCowo}
              setPhotoCowo={setPhotoCowo}
              namaLkpCowo={namaLkpCowo}
              onChangeNamaLkpCowo={(e) => setNamaLkpCowo(e.target.value)}
              namaPglCowo={namaPglCowo}
              onChangeNamaPglCowo={(e) => setNamaPglCowo(e.target.value)}
              namaAyahCowo={namaAyahCowo}
              onChangeNamaAyahCowo={(e) => setNamaAyahCowo(e.target.value)}
              namaIbuCowo={namaIbuCowo}
              onChangeNamaIbuCowo={(e) => setNamaIbuCowo(e.target.value)}
              urutanAnakCowo={urutanAnakCowo}
              onChangeUrutanAnakCowo={(e) => setUrutanAnakCowo(e.target.value)}
              linkIGCowo={linkIGCowo}
              onChangeLinkIGCowo={(e) => setLinkIGCowo(e.target.value)}
              linkFBCowo={linkFBCowo}
              onChangeLinkFBCowo={(e) => setLinkFBCowo(e.target.value)}
            />
            <FormWanita
              onPhotoCewe={onPhotoCewe}
              imagePreview={imagePreviewCewe}
              setPhotoCewe={setPhotoCewe}
              namaLkpCewe={namaLkpCewe}
              onChangeNamaLkpCewe={(e) => setNamaLkpCewe(e.target.value)}
              namaPglCewe={namaPglCewe}
              onChangeNamaPglCewe={(e) => setNamaPglCewe(e.target.value)}
              namaAyahCewe={namaAyahCewe}
              onChangeNamaAyahCewe={(e) => setNamaAyahCewe(e.target.value)}
              namaIbuCewe={namaIbuCewe}
              onChangeNamaIbuCewe={(e) => setNamaIbuCewe(e.target.value)}
              urutanAnakCewe={urutanAnakCewe}
              onChangeUrutanAnakCewe={(e) => setUrutanAnakCewe(e.target.value)}
              linkIGCewe={linkIGCewe}
              onChangeLinkIGCewe={(e) => setLinkIGCewe(e.target.value)}
              linkFBCewe={linkFBCewe}
              onChangeLinkFBCewe={(e) => setLinkFBCewe(e.target.value)}
            />
          </ContainerData>
          <ContainerAkad
            style={{
              color: darkMode ? "#ffffff" : "#333",
              backgroundColor: darkMode ? "#555" : "#FFFFFF",
              width: width,
              transition: "all 1s ease",
            }}
          >
            <FormAkad
              tglAkad={tglAkad}
              onChangeTglAkad={(e) => setTglAkad(e.target.value)}
              waktuAkad={waktuAkad}
              onChangeWaktuAkad={(e) => setWaktuAkad(e.target.value)}
              alamatAkad={alamatAkad}
              onChangeAlamatAkad={(e) => setAlamatAkad(e.target.value)}
              linkAlmtAkad={linkAlmtAkad}
              onChangeLinkAlmtAkad={(e) => setLinkAlmtAkad(e.target.value)}
            />
            <FormResepsi
              tglResepsi={tglResepsi}
              onChangeTglResepsi={(e) => setTglResepsi(e.target.value)}
              waktuResepsi={waktuResepsi}
              onChangeWaktuResepsi={(e) => setWaktuResepsi(e.target.value)}
              alamatResepsi={alamatResepsi}
              onChangeAlamatResepsi={(e) => setAlamatResepsi(e.target.value)}
              linkAlmtResepsi={linkAlmtResepsi}
              onChangeLinkAlmtResepsi={(e) =>
                setLinkAlmtResepsi(e.target.value)
              }
            />
          </ContainerAkad>
          <ContainerDompet
            style={{
              color: darkMode ? "#ffffff" : "#333",
              backgroundColor: darkMode ? "#555" : "#FFFFFF",
              width: width,
              transition: "all 1s ease",
            }}
          >
            <FormDompet
              namaBank={namaBank}
              onChangeNamaBank={(e) => setNamaBank(e.target.value)}
              noRek={noRek}
              onChangeNoRek={(e) => setNoRek(e.target.value)}
              atasNamaBank={atasNamaBank}
              onChangeAtasNamaBank={(e) => setAtasNamaBank(e.target.value)}
              namaDompet={namaDompet}
              onChangeNamaDompet={(e) => setNamaDompet(e.target.value)}
              noHp={noHp}
              onChangeNoHp={(e) => setNoHp(e.target.value)}
              atasNamaDompet={atasNamaDompet}
              onChangeAtasNamaDompet={(e) => setAtasNamaDompet(e.target.value)}
            />
          </ContainerDompet>
          <ContainerGaleri
            style={{
              color: darkMode ? "#ffffff" : "#333",
              backgroundColor: darkMode ? "#555" : "#FFFFFF",
              width: width,
              transition: "all 1s ease",
            }}
          >
            <FormGaleriMusik
              setFiles={setGaleri}
              setPhotoBerdua={setPhotoBerdua}
              setMusic={setMusic}
              idYT={idYT}
              onChangeIdYT={(e) => setIdYT(e.target.value)}
              linkLive={linkLive}
              onChangeLinkLive={(e) => setLinkLive(e.target.value)}
            />
          </ContainerGaleri>
          <Wrapper style={styleBtn}>
            {goals[0] && !isUpdate ? (
              <ContainerBtnSave onClick={onGetUndang}>
                <FiSave size={20} />
                <Label>Lihat Undangan</Label>
              </ContainerBtnSave>
            ) : (
              <ContainerBtnSave
                onClick={onSubmit}
                disabled={
                  !namaLkpCowo ||
                  !namaPglCowo ||
                  !namaAyahCowo ||
                  !namaIbuCowo ||
                  !urutanAnakCowo ||
                  !linkIGCowo ||
                  !linkFBCowo ||
                  !photoCewe ||
                  !namaLkpCewe ||
                  !namaPglCewe ||
                  !namaAyahCewe ||
                  !namaIbuCewe ||
                  !urutanAnakCewe ||
                  !linkIGCewe ||
                  !linkFBCewe ||
                  !tglAkad ||
                  !waktuAkad ||
                  !alamatAkad ||
                  !linkAlmtAkad ||
                  !tglResepsi ||
                  !waktuResepsi ||
                  !alamatResepsi ||
                  !linkAlmtResepsi ||
                  !namaBank ||
                  !noRek ||
                  !atasNamaBank ||
                  !namaDompet ||
                  !noHp ||
                  !atasNamaDompet ||
                  !galeri ||
                  !photoBerdua ||
                  !music ||
                  !idYT ||
                  !linkLive ||
                  !photoCowo
                }
              >
                <FiSave size={20} />
                <Label>{tombol}</Label>
              </ContainerBtnSave>
            )}
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default PremiumDashboard;
