import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

export default function UserProfile() {
  return (
    <>
      <Navigation />
      <Container fluid className="height__min">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item active>userprofile</Breadcrumb.Item>
        </Breadcrumb>

        <Container className="link__group justify-content-between">
          <NavLink className="link__post py-1" to="/userprofile/post">
            Create new post
          </NavLink>
          <NavLink className="link__post py-1" to="/userprofile/post/edit">
            Edit post
          </NavLink>
          <NavLink className="link__post py-1" to="/userprofile/post/delete">
            Delete post
          </NavLink>
        </Container>
      </Container>

      <Footer />
    </>
  );
}

/*
<Container className="link__group justify-content-between">
          <NavLink className="link__post py-1" to="/userprofile/update">
            Update you user avatar
          </NavLink>
          <NavLink className="link__post py-1" to="/userprofile/post/delete">
            Update your banner img
          </NavLink>
        </Container>

        */
/*    <div className="link__group">
          <NavLink className="link__post" to="/userprofile/post">
            Create new post
          </NavLink>
          <NavLink className="link__post" to="/userprofile/post">
            Edit post
          </NavLink>
          <NavLink className="link__post" to="/userprofile/post">
            Delete post
          </NavLink>
        </div> */

/*


     <Container fluid className="container__profilepage pb-5">
        <Row>
          <Col sm="12" className="banner">
            banner - skal være mulig å oppdatere
          </Col>
          <Col md="3">avatar - skal være mulig å oppsatere</Col>

          <Col md="6">
            poster - se mine poster
            <Col>Opprette ny post</Col>
            <Col>Edit post</Col>
            <Col>Delete post</Col>
          </Col>
          <Col md="3">
            {" "}
            <Col>følgere - se hvem som følger meg</Col>
            <Col>følger - se hvem jeg følger. se poster fra de jeg følger?</Col>
          </Col>
        </Row>
      </Container>
*/
