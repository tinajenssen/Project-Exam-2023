import React from "react";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import { Container, Breadcrumb } from "react-bootstrap";
import EditPost from "../../js/api/user/EditPost";
//
export default function EditThisPost() {
  return (
    <>
      <Navigation />
      <Container className="height__min">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item active>Edit post</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center">Edit your post </h1>

        <EditPost />
      </Container>

      <Footer />
    </>
  );
}
