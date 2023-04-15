import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../img/primary_logo.png";

import { NavLink, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../js/api/auth/authContext";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useNavigate;

  function logout() {
    setAuth(null);
    localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    history.push("/");
  }

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
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

/*
 <NavLink
              to="/userprofile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              username
            </NavLink>

            */
