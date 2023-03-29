import React from "react";
//import Heading from "../layout/Heading";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ih from "../../img/ih.png";
import RegisterForm from "./RegisterForm";
//import logo from "../../img/profile-img.png";
//      <Heading title="Register" />
function Register() {
  return (
    <>
      <Container className="vh-100 px-0 form-container" fluid={true}>
        <Row>
          <Col md="8" lg="8" className="form-img">
            <img
              src={ih}
              alt=""
              className="forsidebilde align-items-center viewport-height"
            />
          </Col>
          <Col md="4">
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
//<img src={logo} alt="" className="logo" />

<Container className="vh-100 px-0 form-container" fluid={true}>
  <Row>
    <Col md="8" lg="8" className="form-img fixed-bottom">
      <img
        src={ih}
        alt=""
        className="forsidebilde align-items-center viewport-height"
      />
    </Col>
    <Col md={{ span: 4, offset: 8 }} className="fixed-bottom">
      <RegisterForm />
    </Col>
  </Row>
</Container>;
