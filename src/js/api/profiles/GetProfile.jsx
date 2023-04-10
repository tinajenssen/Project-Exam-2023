import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../img/profile_.png";

//import { API_SOCIAL_URL } from "../constants.jsx";
import { API_SOCIAL_PROFILES } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";
//import GetFollowers from "./Followers.jsx";

import Loading from "../../../components/common/Loading.jsx";

/*
const action = "/profiles/";
const baseUrl = API_SOCIAL_URL + action;
*/

function GetProfile() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  let navigate = useNavigate();

  const { name } = useParams();

  if (!name) {
    navigate.push("/");
  }

  const baseUrl = API_SOCIAL_PROFILES + name;

  const followers = "?_followers=true";

  const url = baseUrl + followers;

  //  const url = baseUrl + name;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetchToken(url);
        const json = await response.json();
        setProfile(json);
        console.log(json);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading posts</div>;
  }

  return (
    <>
      <Container>
        <Breadcrumb className="breadcrumb pt-4 pb-2">
          <Breadcrumb.Item href="/profiles"> Profile</Breadcrumb.Item>
          <Breadcrumb.Item active>{profile.name}</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="justify-content-between">
          <Col sm="12" className={profile.banner ? "banner" : ""}>
            {profile.banner ? <img src={profile.banner} alt="banner" /> : ""}
          </Col>

          <Col md="3" className="pt-3">
            <div className="profile">
              {profile.avatar === "" || profile.avatar === null ? (
                <Image
                  src={DefaultImg}
                  alt="User have not uploaded an avatar yet"
                  className="avatar pt-2"
                />
              ) : (
                <Image
                  src={profile.avatar}
                  alt="Users avatar"
                  className="avatar pt-2"
                />
              )}

              <h2 className="text-center pt-2">{profile.name}</h2>
            </div>
          </Col>
          <Col md="6" className="pt-3">
            <div className="published__posts p-2">
              POSTS
              <h3> Posted by {profile.name}:</h3>
            </div>
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

export default GetProfile;

/*

 <Col sm="12" className="banner">
            <img src={profile.banner} alt="banner" />
          </Col>
          
  <img
                src={profile.avatar}
                alt="Users avatar"
                className="avatar pt-2"
              />


 <div sm="10" className="banner my-2">
       
      </div>
      <Row className="justify-content-between profile__content">
        <Col sm="10" className="justify-content-between">
          <Col md="3" className="px-0">
            <div className="users__profile card pt-3">
              <img src={profile.avatar} alt="Users avatar" />
              <h1>{profile.name}</h1>
            </div>
          </Col>
          <Col md="9" className="gx-5 pe-0">
            <div className="feed card px-3 py-3">posts </div>
          </Col>
        </Col>
      </Row>

      */
