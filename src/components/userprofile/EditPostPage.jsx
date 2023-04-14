import React from "react";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import { Container } from "react-bootstrap";
import EditPost from "../../js/api/user/EditPost";

export default function EditThisPost() {
  return (
    <>
      <Navigation />
      <Container className="height__min">
        <h1>Her kan du endre posten din </h1>
        <EditPost />
      </Container>

      <Footer />
    </>
  );
}
