import React from "react";
import { Col } from "react-bootstrap";

const Banner = ({ profile }) => {
  return (
    <Col sm="12" className={profile.banner ? "banner" : ""}>
      {profile.banner ? <img src={profile.banner} alt="banner" /> : ""}
    </Col>
  );
};

export default Banner;
