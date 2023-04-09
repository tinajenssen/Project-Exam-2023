/* 

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/breadcrumb";

import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

import GetPosts from "../../js/api/posts/Read";

export default function Feed() {
  return (
    <>
      <Navigation />
      <Container fluid className="page-container">
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item active>Posts</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center pb-2">Recent posts</h1>
        <Row>
          <Col sm={10} md={8} lg={7} className="posts-container">
            <GetPosts />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

*/

/*
 <Container fluid className="page-container">
        <Row className="px-5 py-4">
          <Col className="card py-4">
            <ProfileTabs />
          </Col>
        </Row>
      </Container>

      */

/*

   <Row className="px-5 py-5 justify-content-between">
          <Col md="12" className="banner card mb-2">
            <ProfileTabs />
          </Col>
        </Row>

*/
/*


import Navigation from "../layout/Navigation";
import ProfileTabs from "./Tabs";
import Footer from "../layout/Footer";

//import * as post from "../../js/api/posts/index.jsx";
export default function feed() {
  return (
    <>
      <Navigation />
      <Container fluid className="page-container">
        <Row className="px-5 py-5 justify-content-between">
          <Col md="12" className="banner card mb-2">
            Banner
          </Col>
          <Col md="3" className="px-0">
            <div className="user-profile card pt-3"></div>
          </Col>
          <Col md="9" className="gx-5 pe-0">
            <div className="feed card px-3 py-3">
              <ProfileTabs />
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
*/
/*
post.getPosts().then(console.log);
*/
