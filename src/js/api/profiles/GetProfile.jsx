import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { API_SOCIAL_PROFILES } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";
import Loading from "../../../components/common/Loading.jsx";
import Banner from "./profile/Banner.jsx";
import Profile from "./profile/Profile.jsx";
import { Link } from "react-router-dom";

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
  const posts = "?_posts=true";
  const following = "&following=true";
  const followers = "&followers=true";
  const url = baseUrl + posts + following + followers;

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
          <Breadcrumb.Item href="/profiles">Profiles</Breadcrumb.Item>
          <Breadcrumb.Item active>{profile.name}</Breadcrumb.Item>
        </Breadcrumb>

        <Row className="justify-content-between">
          <Banner profile={profile} />
          <Col md="4" lg="3" className="pt-3">
            <Profile profile={profile} />
          </Col>
          <Col md="8" lg="9" className="pt-3 profile__posts">
            {profile.posts &&
              profile.posts.map((post) => (
                <Link to={`/posts/${post.id}`} className="linktopost">
                  <div className="profile__post">
                    <img className="profile__media" src={post.media} alt="" />
                    <h2>{post.title}</h2>
                    <p className="posted__date">
                      {new Date(post.created).toLocaleDateString()}
                    </p>
                    <p>{post.body}</p>
                  </div>
                </Link>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GetProfile;
