import React from "react";
//import Container from "react-bootstrap/Container";
//import Col from "react-bootstrap/Col";
//import Row from "react-bootstrap/Row";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
//import CreateNewPost from "../../js/api/posts/Create";
import GetUserprofile from "../../js/api/user/GetUserprofile";

export default function UserProfile() {
  return (
    <>
      <Navigation />

      <GetUserprofile />

      <Footer />
    </>
  );
}

/*
     <Container fluid className="container__profilepage pb-5">
        <Row>
          <Col sm="12" className="banner">
            banner - skal være mulig å oppdatere
          </Col>
          <Col md="3">avatar - skal være mulig å oppsatere</Col>

          <Col md="6">
            poster - se mine poster
            <Col>Opprette ny post</Col>
            <Col>Edit post</Col>
            <Col>Delete post</Col>
          </Col>
          <Col md="3">
            {" "}
            <Col>følgere - se hvem som følger meg</Col>
            <Col>følger - se hvem jeg følger. se poster fra de jeg følger?</Col>
          </Col>
        </Row>
      </Container>
*/
