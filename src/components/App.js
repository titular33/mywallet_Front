import React from "react";
import { useState } from "react";
import UserContext from "./../context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import InitialPage from "./InitialPage";
import SignUp from "./SignUp";
import Register from "./Register";
import Moviment from "./Moviment";

export default function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InitialPage />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/registros" element={<Register />}></Route>
            <Route
              path="/Movimentacao"
              element={<Moviment />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}