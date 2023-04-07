import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../../img/secondary_logo.png";
import Nav from "react-bootstrap/Nav";

function Home() {
  return (
    <>
      <Container fluid className="vh-100 gradient-background">
        <div className="box">
          <img src={logo} alt="" className="secondary-logo" />
          <h1 className=" text-center">Welcome to Noroff Network</h1>
          <h3 className="text-center">
            An inspiring network for Noroff students{" "}
          </h3>
          <Nav.Link className="primary-button" href="/login">
            Login
          </Nav.Link>
          <Nav.Link className="secondary-button" href="/register">
            Register
          </Nav.Link>
        </div>
      </Container>
    </>
  );
}

export default Home;
