import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ih from "../../img/ih.png";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <>
      <Container className="vh-100 px-0 form-container" fluid={true}>
        <Row>
          <Col md="8" className="one ">
            <img src={ih} alt="" className="forsidebilde  fixed-bottom" />
          </Col>
          <Col med="4" className="two">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
