import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

import GetThisPost from "../../js/api/posts/GetPost";

export default function ThisPost() {
  return (
    <>
      <Navigation />
      <Container fluid>
        <Row>
          <Col>
            <GetThisPost />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
//<Container fluid className="container__post">
