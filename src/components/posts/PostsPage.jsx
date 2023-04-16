import React from "react";
import { Container, Col } from "react-bootstrap";

import Navigation from "../layout/Navigation";
import Breadcrumb from "react-bootstrap/breadcrumb";
import GetPosts from "../../js/api/posts/GetPosts";
import Footer from "../layout/Footer";

export default function Posts() {
  return (
    <>
      <Navigation />
      <Container fluid className="container__page">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item active>Posts</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center pb-2">Recent posts</h1>
        <Col fluid className="container__posts mb-4">
          <GetPosts />
        </Col>
      </Container>
      <Footer />
    </>
  );
}
