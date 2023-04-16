import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../../img/noroff-network_logo_dark.png";

function Home() {
  return (
    <>
      <Container className="home px-0" fluid={true}>
        <Row>
          <Col md="8" className="col__intro">
            <Col className="px-5 welcome">
              <img src={logo} alt="" className="logo--light-blue" />
              <h1>Welcome to Noroff Network</h1>
              <p>
                Noroff Network is an inviting platform that unifies students,
                with the main goal of inspiring and educating one another. It is
                a fun and inclusive environment that encourages users to share
                and discover in order to engage, entertain, and educate one
                another.{" "}
              </p>
            </Col>
          </Col>
          <Col md="4" className="col__links">
            <Col className="links">
              <Nav.Link className="btn--primary-dark-outline" href="/login">
                Login
              </Nav.Link>
              <Nav.Link className="btn--primary-dark-outline" href="/register">
                Register
              </Nav.Link>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
