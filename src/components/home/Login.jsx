import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import illustration from "../../img/illustration_.png";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <>
      <Container className="vh-100 px-0 form-container" fluid={true}>
        <Row>
          <Col md="8" className="col-left">
            <img src={illustration} alt="" />
          </Col>
          <Col med="4" className="col-right">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
