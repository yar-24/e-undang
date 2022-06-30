import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Register,
  MainWebsite,
  DashboardPage,
  PilihTemaPage,
  PilihHargaPage,
  PremiumPage,
  Profile,
  ErrorPage,
  NotificationPage,
} from "../pages";
import { Tema1, Tema2 } from "../config/Tema";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import axios from "axios";

function RouterScreen() {
  const [statusOrder, setStatusOrder] = useState("");
  const [orderId, setOrderId] = useState("");

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:5000/api/order", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          const id = res.data[0].id;
          setOrderId(id);
        })
        .catch((err) => {
          // console.log("error: ", err);
        });

      axios
        .get(`http://localhost:5000/api/order/status/${orderId}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          const status = res.data.data.transaction_status;
          setStatusOrder(status);
        })
        .catch((err) => {
          // console.log();
        });
    }
  }, [orderId, user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/blue-flower/:namaTamu/:id" element={<Tema1 />} />
        <Route path="/contoh-tema-2/:username" element={<Tema2 />} />
        <Route
          path="/dashboard"
          element={user ? <DashboardPage /> : <Login />}
        />
        <Route
          path="/pilih-tema"
          element={user && !orderId ? <PilihTemaPage /> : <Login />}
        />
        <Route
          path="/pilih-harga"
          element={user && !orderId ? <PilihHargaPage /> : <Login />}
        />
        <Route
          path="/data-premium"
          element={
            user && statusOrder === "settlement" ? <PremiumPage /> : <Login />
          }
        />
        <Route
          path="/data-premium/:id"
          element={
            user && statusOrder === "settlement" ? <PremiumPage /> : <Login />
          }
        />
        <Route
          path="/notification/:id"
          element={user ? <NotificationPage /> : <Login />}
        />
        <Route path="/profile/:id" element={user ? <Profile /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default RouterScreen;
