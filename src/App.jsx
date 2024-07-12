import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/login";
import UserRegister from "./components/register";
import Home from "./pages/HomePage";
import Intro from "./components/intro";
import Topic from "./components/topic";
import Scenario from "./components/scenario";
import Admin from "./pages/Admin.jsx";
import "./App.css";
import CtfDetail from "./components/newctfdetail.jsx";

import Leaderboard from "./components/leaderboard.jsx";
import Footer from "./components/Footer.jsx";
import AdminProfile from "./pages/AdminProfile.jsx";
import QuizForm from "./pages/questions.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Graph from "./components/graph.jsx";
import BarGraph from "./components/BarGraph.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import Content from "./components/content.jsx";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";



function App() {
  return (
    <>
      <div className="mt-16">
        <BrowserRouter>
          <Routes>
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/" element={<Home />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/bargraph" element={<BarGraph />} />
            <Route path="/question" element={<QuizForm />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blogpage" element={<BlogPage />} />
            <Route path="/content" element={<Content />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/ctfdetailpage" element={<CtfDetail />} />
            <Route path="/scenario" element={<Scenario />} />
            <Route path="/topic/:id" element={<Intro />} />
            <Route path="/topic" element={<Topic />} />
            <Route path="/scenario/:id" element={<Scenario />} />
            <Route path="/ctfdetail" element={<CtfDetail />} />
            <Route path="/newctfdetail" element={<CtfDetail />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminprofile" element={<AdminProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
