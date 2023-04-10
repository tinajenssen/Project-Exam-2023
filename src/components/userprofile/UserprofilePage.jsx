import React from "react";
import Container from "react-bootstrap/Container";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import GetUserprofile from "../../js/api/user/GetUserprofile";

export default function UserProfile() {
  return (
    <>
      <Navigation />

      <Container fluid className="container__profilepage pb-5">
        <h1>get user profile</h1>
        <GetUserprofile />
      </Container>

      <Footer />
    </>
  );
}
