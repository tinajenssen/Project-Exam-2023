import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

import Loading from "../../../components/common/Loading.jsx";

import SearchForm from "../../../components/profiles/Search.jsx";

const action = "/profiles";
const url = API_SOCIAL_URL + action;

function GetProfiles() {
  const [profiles, setProfiles] = useState([]);

  // loading
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetchToken(url);
        const json = await response.json();
        setProfiles(json);
        console.log(json);
        // clear loading when data is successfylly loaded
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading posts</div>;
  }
  //const [imgSrc, setImgSrc] = useState("Invalid Image Source");
  //<img src={imgSrc} onError = {() => setImgSrc("https://picsum.photos/200")} />

  return (
    <Container className="all-profiles">
      <Row>
        <Col md={12}>
          <SearchForm />
        </Col>
        <Col>
          {profiles.map((profile) => (
            <div
              className="d-flex profiles"
              id={profile.id}
              data-target={profile.id}
              key={profile.id}
            >
              <img
                src={profile.avatar}
                alt="Users avatar"
                className="me-3 rounded-circle profile__avatar col-md-2"
                style={{ width: "50px", height: "50px" }}
              />

              <h2 className="profile__name ps-2 col-md-8">
                <Link className="link-to-profile" to="/">
                  {profile.name}
                </Link>
              </h2>
              <div className="btn--follow col-md-2">Follow</div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default GetProfiles;
/*
{posts.map((post) => (
  <div
    className="d-flex posts"
    id={post.id}
    data-target={post.id}
    key={post.id}
  >
    <img
      src={Profile}
      alt="Users Avatar"
      className="me-3 rounded-circle"
      style={{ width: "60px", height: "60px" }}
    />
    <Link to={`post/${post.id}`}>
      <div>
        <h2>{post.title}</h2>
        <p className="date">Posted on {post.created}</p>
        <p>{post.body}</p>
      </div>
    </Link>
  </div>
))}
*/
/* 
 <div>
        {profiles.map(profile => (      
            <div className="profiles" id={profile.id} data-target={profile.id} key={profile.id}>
                <div className="row">
                        <div className="col-8 profileName">
                        <Link to={`/feed/profiles/${profile.name}`}>{profile.name}</Link>
                            <p>{error}</p>
                        </div>
                        <div className="col-4 profileBtn">
                            <FollowUnfollowButton followers={profile.followers} profileName={profile.name} />
                        </div>  
              
                </div>
            </div>
        ))}
    </div>

    */

/*
                  <Link to={`/feed/profiles/${profile.name}`}>{profile.name}</Link>
    */
