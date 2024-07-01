import React from "react";
import { Routes, Route } from "react-router-dom";
// import Nav from "./components/Navbar/Nav";
import Home from "./home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Input from "./components/Searchbox/Input";
import Footer from "./components/footer/Footer";
import "./index.css";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/input" element={<Input />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
