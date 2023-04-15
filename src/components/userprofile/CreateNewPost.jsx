import React from "react";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import { Container, Breadcrumb } from "react-bootstrap";
import CreateNewPost from "../../js/api/user/CreatePost";

export default function NewPost() {
  return (
    <>
      <Navigation />
      <Container className="height__min">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item href="/userprofile">userprofile</Breadcrumb.Item>
          <Breadcrumb.Item active>Create new post</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-center">Create new post </h1>
        <CreateNewPost />
      </Container>

      <Footer />
    </>
  );
}
