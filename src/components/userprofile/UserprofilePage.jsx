import React from "react";
import Container from "react-bootstrap/Container";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

export default function UserProfile() {
  return (
    <>
      <Navigation />

      <Container fluid className="container__profilepage pb-5"></Container>

      <Footer />
    </>
  );
}
