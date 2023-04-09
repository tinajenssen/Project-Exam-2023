import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Index";
import Register from "./components/home/Register";
import Login from "./components/home/Login";
import Posts from "./components/posts/Posts";
import People from "./components/profiles/Profiles";
import User from "./components/userprofile/Userprofile";
import Profile from "./components/profile/Profile";
import GetThisPost from "./components/posts/ThisPost";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="posts/:id" element={<GetThisPost />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
