import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../img/primary_logo.png";

import { NavLink } from "react-router-dom";

function Navigation() {
  const logout = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Navbar collapseOnSelect expand="md">
      <Container fluid className="nav-container ps-0 pe-0 mx-5">
        <Navbar.Collapse className="nav-profile w-100 order-1 order-md-0">
          <Nav className="nav-link me-auto">
            <NavLink
              to="/posts"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Posts
            </NavLink>
            <NavLink
              to="/profiles"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Profiles
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/posts" className=" mx-md-auto order-0">
          <img src={Logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="w-100 order-3">
          <Nav className="nav-links ms-auto">
            <NavLink
              to="/userprofile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Userprofile
            </NavLink>

            <div className="logout__container">
              <button onClick={logout} className="btn--logout">
                Logout
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

/*
       <Nav.Link href="" className="btn--logout">
                {auth ? (
                  <>
                    <button onClick={logout} className="nav-btn">
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="/">Logout</Link>
                )}
              </Nav.Link>


 <NavLink
              to="/userprofile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              username
            </NavLink>

            */
