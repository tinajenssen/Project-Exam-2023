import React from "react";
//import React, { useEffect, useState } from "react";
//import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import { API_SOCIAL_URL } from "../constants.jsx";
//import { API_SOCIAL_PROFILES } from "../constants.jsx";
//import { fetchToken } from "../fetchToken.jsx";
//import GetFollowers from "./Followers.jsx";

//import Loading from "../../../components/common/Loading.jsx";

/*
const action = "/profiles/";
const baseUrl = API_SOCIAL_URL + action;
*/

function GetUserprofile() {
  return (
    <>
      <Container>
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item href="/posts"> Posts</Breadcrumb.Item>
          <Breadcrumb.Item active>my userprofile</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="justify-content-between">
          <Col sm="12" className="banner">
            banner
          </Col>
          <Col md="3" className="pt-3 userprofile">
            avatar + navn
          </Col>
          <Col md="6" className="pt-3 my__posts">
            posts
          </Col>
          <Col md="3" className="pt-3">
            <div className="published__posts p-2">
              <h4>Followers</h4>

              <h4>Following</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GetUserprofile;
