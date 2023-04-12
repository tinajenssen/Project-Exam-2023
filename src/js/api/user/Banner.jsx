import React from "react";
import { Col } from "react-bootstrap";

const Banner = ({ profile }) => {
  return (
    <Col sm="12">
      <img src={profile.banner} alt="banner" />
    </Col>
  );
};

export default Banner;
