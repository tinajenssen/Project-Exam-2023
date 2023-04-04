import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/feed/Feed";
import Find from "./components/find/Find";
import Profile from "./components/profile/Profile";
import Register from "./components/home/Register";
import Login from "./components/home/Login";
import Home from "./components/home/Index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/find" element={<Find />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
