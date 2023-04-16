import React from "react";
import { Container, Spinner } from "react-bootstrap";

function Loading() {
  return (
    <Container className="container__spinner">
      <Spinner animation="border" role="status" className="spinner">
        <span className="visually-hidden ">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default Loading;
