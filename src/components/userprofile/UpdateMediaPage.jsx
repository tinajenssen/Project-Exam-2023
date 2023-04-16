import React from "react";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import { Container, Breadcrumb } from "react-bootstrap";
//import CreateNewPost from "../../js/api/user/CreatePost";
import UpdateForm from "../../js/api/user/UpdateAvatar";

export default function UpdateMedia() {
  return (
    <>
      <Navigation />
      <Container className="height__min">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item href="/userprofile">userprofile</Breadcrumb.Item>
          <Breadcrumb.Item active>Update media</Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-center">Update profile media </h1>
        <p>her skal det være mulig å oppdatere avatar og banner</p>
        <UpdateForm />
      </Container>

      <Footer />
    </>
  );
}

/*
   <UpdateAvatar />
        <UpdateBanner />
        */
