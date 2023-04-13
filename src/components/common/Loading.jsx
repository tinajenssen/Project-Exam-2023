import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

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
