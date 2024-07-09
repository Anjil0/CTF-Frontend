import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/login";
import UserRegister from "./components/register";
import Home from "./pages/HomePage";
import Intro from "./components/intro";
import Topic from "./components/topic";
import Admin from "./pages/Admin.jsx";
import "./App.css";
import CtfDetail from "./components/newctfdetail.jsx";
import Addt from "./components/Addt.jsx";
import Leaderboard from "./components/leaderboard.jsx";
import Footer from "./components/Footer.jsx";
import Addq from "./components/Addq.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addTopic" element={<Addt />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/addQ" element={<Addq />} />
          <Route path="/topic/:id" element={<Intro />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/newctfdetail/:id" element={<CtfDetail />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
