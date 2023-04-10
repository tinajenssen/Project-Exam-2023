import React from "react";
import Container from "react-bootstrap/Container";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

import GetProfile from "../../js/api/profiles/GetProfile";

export default function Profile() {
  return (
    <>
      <Navigation />

      <Container fluid className="container__profilepage pb-5">
        <GetProfile />
      </Container>

      <Footer />
    </>
  );
}
