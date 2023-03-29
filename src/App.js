//import Layout from "./components/layout/Layout";
//import { Login } from "./profile/login/Login";

//<Login />

/* import RegisterForm from "./profile/register"; */
//import RegisterForm from "./profile/register/Register";
//import RegForm from "./profile/register/Register";
// import Navigation from "./components/layout/Navigation";

//import { Register } from "./profile/register/Register";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/feed/Feed";
import Find from "./components/find/Find";
import Profile from "./components/profile/Profile";
import Register from "./components/home/Register";
import Login from "./components/home/Login";
// import Navigation from "./components/layout/Navigation";
// <Navigation />
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>
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
/*

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feed from "./components/feed/Feed";
import Find from "./components/find/Find";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
      <Router>
        <div>
          <Link to="/feed">Feed</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/find">Find</Link>

          <Routes>
            <Route exact path="/feed">
              <Feed />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/find">
              <Find />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
*/
