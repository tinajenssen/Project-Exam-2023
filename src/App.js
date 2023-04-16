import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Index";
import Register from "./components/home/RegisterPage";
import Login from "./components/home/LoginPage";
import Posts from "./components/posts/PostsPage";
import GetThisPost from "./components/posts/PostPage";
import Profiles from "./components/profiles/ProfilesPage";
import Profile from "./components/profiles/ProfilePage";
import User from "./components/userprofile/UserprofilePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="posts/:id" element={<GetThisPost />}></Route>
          <Route path="/profiles" element={<Profiles />}></Route>
          <Route path="profiles/:name" element={<Profile />}></Route>
          <Route path="/userprofile" element={<User />}></Route>
          <Route path="posts/:name" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
