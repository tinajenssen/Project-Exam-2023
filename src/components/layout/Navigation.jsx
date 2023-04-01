import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Profile from "../../img/profile_.png";

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
          <img src={Profile} className="logo-img" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="w-100 order-3">
          <Nav className="nav-links ms-auto">
            <Nav.Link href="" className="pt-3">
              Logout
            </Nav.Link>
            <Nav.Link href="/profile">
              <img src={Profile} className="profile-img" alt="user profile" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
