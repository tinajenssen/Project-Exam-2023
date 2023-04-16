import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import GetProfiles from "../../js/api/profiles/GetProfiles";

export default function Profiles() {
  return (
    <>
      <Navigation />
      <Container fluid className="container__page">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item active>Profiles</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center pb-2">Find other profiles</h1>
        <GetProfiles />
      </Container>
      <Footer />
    </>
  );
}
