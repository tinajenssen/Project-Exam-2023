import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/breadcrumb";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

import GetPosts from "../../js/api/posts/GetPosts";

export default function Posts() {
  return (
    <>
      <Navigation />
      <Container fluid className="container__page">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item active>Posts</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center pb-2">Recent posts</h1>
        <Row>
          <Col sm={10} md={9} className="container__posts">
            <GetPosts />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
