import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "../src/Components/login.jsx";
import UserRegister from "../src/Components/register.jsx";
import Home from "../src/pages/HomePage.jsx";
import Admin from "../src/pages/Admin.jsx";
import "./App.css";
import Addt from "../src/Components/Addt.jsx";
import Leaderboard from "../src/Components/leaderboard.jsx";
import Footer from "../src/Components/Footer.jsx";
import Addq from "../src/Components/Addq.jsx";
import Aboutus from "../src/Components/Aboutus.jsx";
import UserDash from "../src/Components/UserDash.jsx";
import Dropdown from "../src/Components/dropdown.jsx";
import Submit from '../src/Components/Submit.jsx'
import Prodlogin from "../src/Components/prodlogin.jsx";
import Blog from "../src/Components/Blog.jsx";
import NavBar from "../src/Components/NavBar.jsx";
import Content from "../src/Components/content.jsx";
import View from "../src/Components/view.jsx";




function App() {
  return (
    <>
    <div className="mt-16">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addTopic" element={<Addt />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/addQ" element={<Addq />} />
          <Route path="/UserDash" element={<UserDash />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/addq" element={<Addq />} />
          <Route path="/addt" element={<Addt />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/prodlogin" element={<Prodlogin />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/content" element={<Content />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
