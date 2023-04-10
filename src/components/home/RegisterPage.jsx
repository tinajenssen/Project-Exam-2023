import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import illustration from "../../img/illustration.png";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <>
      <Container className="vh-100 px-0 form-container" fluid={true}>
        <Row>
          <Col md="8" className="col__left ">
            <img
              src={illustration}
              alt="illustration of people on social media"
              className="forsidebilde align-items-center viewport-height"
            />
          </Col>
          <Col md="4" className="col__right">
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
