import React from "react";
import { Container, Col, Breadcrumb } from "react-bootstrap";
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
        <Col fluid className="container__posts mb-4">
          <GetPosts />
        </Col>
      </Container>
      <Footer />
    </>
  );
}
