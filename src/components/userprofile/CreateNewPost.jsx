import React from "react";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import { Container } from "react-bootstrap";
import CreateNewPost from "../../js/api/user/CreatePost";

export default function NewPost() {
  return (
    <>
      <Navigation />
      <Container className="height__min">
        <h1>Her kan du laste opp en ny post </h1>
        <CreateNewPost />
      </Container>

      <Footer />
    </>
  );
}
