import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import Profile from "../../img/profile_.png";
import Logo from "../../img/primary_logo.png";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container fluid className="nav-container ps-0 pe-0 mx-5">
        <Navbar.Collapse className="nav-profile w-100 order-1 order-md-0">
          <Nav className="nav-link me-auto">
            <NavLink
              to="/feed"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Feed
            </NavLink>
            <NavLink
              to="/people"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              People
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className=" mx-md-auto order-0">
          <img src={Logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="w-100 order-3">
          <Nav className="nav-links ms-auto">
            <NavLink
              to="/user"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              User
            </NavLink>

            <Nav.Link href="" className="logout-btn">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

/*

  <Nav.Link href="/profile">
              <img src={Profile} className="profile-img" alt="user profile" />
            </Nav.Link>

            */
