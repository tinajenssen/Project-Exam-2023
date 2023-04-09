import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <Spinner animation="border" role="status" className="spinner">
      <span className="visually-hidden ">Loading...</span>
    </Spinner>
  );
}

export default Loading;
