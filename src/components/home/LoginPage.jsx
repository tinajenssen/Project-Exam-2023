import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import illustration from "../../img/illustration.png";
import logo from "../../img/noroff-network_logo_dark.png";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <>
      <Container className="vh-100 px-0 form-container" fluid={true}>
        <Row>
          <Col md="8" className="col__left">
            <img src={logo} className="logo__form" alt="Noroff Netowrk logo" />
            <img
              src={illustration}
              alt="illustration of people on social media"
              className="illustration"
            />
          </Col>
          <Col md="4" className="col__right">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
