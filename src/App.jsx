import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import UserLogin from "./components/login";
import UserRegister from "./components/register";
// import Home from "./pages/HomePage";
import Intro from "./components/intro";
import Topic from "./components/topic";
import Admin from "./pages/Admin.jsx";
import "./App.css";
import CtfDetail from "./components/newctfdetail.jsx";
import Addt from "./components/Addt.jsx";
import Leaderboard from "./components/leaderboard.jsx";
import Footer from "./components/Footer.jsx";
import UserProfile from "./components/UserProfile.jsx";
import ParallaxComponent from "./pages/parallax.jsx";
import Addq from "./components/Addq.jsx";

function App() {
  return (
    <>
    <div className="mt-16">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/topi" element={<content />} />
          <Route path="/addTopic" element={<Addt />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/addQ" element={<Addq />} />
          <Route path="/topic/:id" element={<Intro />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/scenario/:id" element={<Scenario />} />
          <Route path="/ctfdetail" element={<CtfDetail />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/newctfdetail" element={<CtfDetail />} />
          <Route path="/newctfdetail/:id" element={<CtfDetail />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
