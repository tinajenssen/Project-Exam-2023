import React from "react";
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
          <Col md="8" className="col-left ">
            <img src={ih} alt="" />
          </Col>
          <Col md="4" className="col-right">
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;

/*
<Col md="8" lg="8" className="form-img fixed-bottom">
<img
  src={ih}
  alt=""
  className="forsidebilde align-items-center viewport-height"
/>
</Col>
*/
