import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "../../img/test_logo.png";
import Nav from "react-bootstrap/Nav";

function Home() {
  return (
    <>
      <Container className="vh-100 px-0" fluid={true}>
        <Row>
          <Col md="8" className="col__intro">
            <Col className="px-5 welcome">
              <img src={logo} alt="" className="logo--light-blue" />
              <h1>Welcome to Noroff Network</h1>
              <h3>An inspiring network for Noroff students </h3>
            </Col>
          </Col>
          <Col md="4" className="col__links">
            <Col className="links">
              <Nav.Link className="btn--primary" href="/login">
                Login
              </Nav.Link>
              <Nav.Link className="btn--primary-outline" href="/register">
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

/*
<Container fluid className="vh-100 background--gradient">
<div className="box">
  <img src={logo} alt="" className="logo--secondary" />
  <h1 className=" text-center">Welcome to Noroff Network</h1>
  <h3 className="text-center">
    An inspiring network for Noroff students{" "}
  </h3>
  <Nav.Link className="btn--primary" href="/login">
    Login
  </Nav.Link>
  <Nav.Link className="btn--primary-outline" href="/register">
    Register
  </Nav.Link>
</div>
</Container>

*/
