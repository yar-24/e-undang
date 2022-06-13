import React from "react";
import { Route, Routes } from "react-router-dom";
import {Login, Register, MainWebsite, DashboardPage, PilihTemaPage, PilihHargaPage, PremiumPage, Profile, ErrorPage, Notification } from "../pages";
import { Tema1, Tema2 } from "../config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function RouterScreen() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/blue-flower/:namaTamu/:id" element={<Tema1 />} />
        {/* <Route path="/:username/:nama/:id" element={<Tema1 />} /> */}
        <Route path="/contoh-tema-2/:username" element={<Tema2 />} />
        {/* <Route path="/posts" element={<User />} /> */}
        {/* <Route path="/create-undangan" element={ user ? <CreateUndang /> : <Login/>} /> */}
        <Route path="/dashboard" element={ user ? <DashboardPage /> : <Login/>} />
        <Route path="/pilih-tema" element={ user ? <PilihTemaPage /> : <Login/>} />
        <Route path="/pilih-harga" element={ user ? <PilihHargaPage /> : <Login/>} />
        <Route path="/data-premium" element={ user  ? <PremiumPage /> : <Login/>} />
        <Route path="/data-premium/:id" element={ user  ? <PremiumPage /> : <Login/>} />
        <Route path="/notification" element={ user  ? <Notification /> : <Login/>} />
        <Route path="/profile/:id" element={ user ? <Profile /> : <Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default RouterScreen;
