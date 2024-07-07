import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "../src/Components/login.jsx";
import UserRegister from "../src/Components/register.jsx";
import Home from "../src/pages/HomePage.jsx";
import Intro from "../src/Components/intro.jsx";
import Topic from "../src/Components/topic.jsx";
import Scenario from "../src/Components/scenario.jsx";
import Admin from "../src/pages/Admin.jsx";
import "./App.css";
import CtfDetail from "../src/Components/newctfdetail.jsx";
import Addq from "./Components/addq.jsx";
import Addt from "./Components/addt.jsx";
import Leaderboard from "../src/Components/leaderboard.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import UserDash from "../src/Components/UserDash.jsx";
import Dropdown from "../src/Components/dropdown.jsx";
import Submit from '../src/Components/Submit.jsx'




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/ctfdetailpage" element={<CtfDetail />} />
          <Route path="/scenario" element={<Scenario />} />
          <Route path="/topic/:id" element={<Intro />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/scenario/:id" element={<Scenario />} />
          <Route path="/ctfdetail" element={<CtfDetail />} />
          <Route path="/addq" element={<Addq />} />
          <Route path="/addt" element={<Addt />} />
          <Route path="/newctfdetail" element={<CtfDetail />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/UserDash" element={<UserDash />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/submit" element={<Submit />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
