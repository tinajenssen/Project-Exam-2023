import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Profile from "../../img/profile-img.png";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Collapse className="nav-profile w-100 order-1 order-md-0">
          <Nav className="nav-links me-auto">
            <Nav.Link href="/feed">Feed</Nav.Link>
            <Nav.Link href="/find">Find</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className=" mx-md-auto order-0">
          <img src={Profile} className="logo-img" alt="profile picture" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="w-100 order-3">
          <Nav className="nav-links ms-auto">
            <Nav.Link href="" className="pt-3">
              Logout
            </Nav.Link>
            <Nav.Link href="/profile">
              <img
                src={Profile}
                className="profile-img"
                alt="profile picture"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

/* NAVBAR 

    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Row>
          <Col className="one">
            <Row>
              <Col md={4}>
                <img
                  src={Profile}
                  className="profile-img"
                  alt="profile picture"
                />
              </Col>
              <Col md={8}>
                <NavLink href="/profile">Profile name</NavLink>
              </Col>
            </Row>
          </Col>

          <Col className="two">
            <Navbar.Brand href="/feed">Noroff Network</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>

          <Col classname="three">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavLink href="/feed">Feed</NavLink>
                <NavLink href="/find">Find</NavLink>
                <NavLink href="">Logout</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>

*/
/*

 <Nav className="me-auto">




import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Find from "../find/Find";
import Profile from "../profile/Profile";
import Feed from "../home/Feed";

function Navigation() {
  return (
    <Router>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Noroff Network</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="/feed">Feed</NavLink>
              <NavLink href="/find">Find</NavLink>
              <NavLink href="/profile">Profile</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/feed" exact element={<Feed />} />
          <Route path="/find" element={<Find />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default Navigation;
*/
