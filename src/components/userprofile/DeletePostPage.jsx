import React from "react";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import { Container, Breadcrumb } from "react-bootstrap";
import DeletePost from "../../js/api/user/DeletePost";

export default function DeleteThisPost() {
  return (
    <>
      <Navigation />
      <Container className="height__min">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item href="/userprofile">userprofile</Breadcrumb.Item>
          <Breadcrumb.Item active>Delete</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center">Delete post </h1>

        <DeletePost />
      </Container>

      <Footer />
    </>
  );
}
