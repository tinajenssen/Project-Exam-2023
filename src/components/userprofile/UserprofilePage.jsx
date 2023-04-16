import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import PostTabs from "./Tabs";

export default function UserProfile() {
  return (
    <>
      <Navigation />
      <Container fluid className="height__min">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item active>userprofile</Breadcrumb.Item>
        </Breadcrumb>
        <PostTabs />
      </Container>
      <Footer />
    </>
  );
}
