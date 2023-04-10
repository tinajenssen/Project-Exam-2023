/*
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

import { API_SOCIAL_PROFILES } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

import Loading from "../../../components/common/Loading.jsx";

/*
const action = "/profiles/";
const baseUrl = API_SOCIAL_URL + action;
*/
/*
function GetFollowers() {
  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  let navigate = useNavigate();

  const { name } = useParams();

  if (!name) {
    navigate.push("/");
  }

  const baseUrl = API_SOCIAL_PROFILES + name;

  const followersUrl = "?_followers=true";

  const url = baseUrl + followersUrl;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetchToken(url);
        const json = await response.json();
        setFollowers(json);
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
    {profiles.map((profile) => (


        {followers.map((follower) => (
          <ul>
            <li>{follower.name}</li>
          </ul>
        ))}


  );
}

export default GetFollowers;
*/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import { API_SOCIAL_URL } from "../constants.jsx";
import { API_SOCIAL_PROFILES } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

//import Loading from "../../../components/common/Loading.jsx";

const { name } = useParams();
const baseUrl = API_SOCIAL_PROFILES + name;
const followersUrl = baseUrl + "?_followers=true";

function GetFollowers() {
  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetchToken(followersUrl);
        const json = await response.json();
        setFollowers(json);
        console.log(json);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>Error loading followers</div>;
  }

  return (
    <Container className="all-followes">
      <Row>
        <Col>
          {followers.map((follower) => (
            <div
              className="d-flex profiles"
              id={follower.name}
              data-target={follower.name}
              key={follower.name}
            >
              <div className="me-3 profile__avatar col-md-2">
                <img src={follower.avatar} alt="Users avatar" />
              </div>

              <h2 className="profile__name ps-2 col-md-8">
                <Link to={`${follower.name}`} className="profile__link">
                  {follower.name}
                </Link>
              </h2>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default GetFollowers;

/* style={{ backgroundImage: `url(${Placeholder})` }}
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
