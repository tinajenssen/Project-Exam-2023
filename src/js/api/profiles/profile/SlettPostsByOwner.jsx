import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../../fetchToken.jsx";

import Loading from "../../../../components/common/Loading.jsx";

function GetProfilePosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetchToken(
          "https://nf-api.onrender.com/api/v1/social/profiles/{name}?_posts=true"
        );
        const json = await response.json();
        setPosts(json);
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
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading posts</div>;
  }

  return (
    <>
      <Container fluid>
        <Row>
          {posts.map((post) => {
            if (post.title && post.body && post.media) {
              return (
                <Col xs={12} sm={6} md={4}>
                  <Link to={`${post.id}`} className="post__link d-flex">
                    <div
                      className="post__card"
                      id={post.id}
                      data-target={post.id}
                      key={post.id}
                    >
                      <img
                        className="post__media my-2"
                        src={post.media}
                        alt=""
                      />
                      <h2 className="mb-0">{post.title}</h2>
                      <div className="post__details">
                        <Link
                          to={`/profiles/${post.author && post.author.name}`}
                          className="post__author"
                        >
                          {post.author.name}
                        </Link>

                        <p className="post__date">
                          | {new Date(post.created).toLocaleDateString()}
                        </p>
                      </div>

                      <p className="mt-2">{post.body}</p>
                    </div>
                  </Link>
                </Col>
              );
            }
            return null;
          })}
        </Row>
      </Container>
    </>
  );
}

export default GetProfilePosts;

/*
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
//import Col from "react-bootstrap/Col";

const ProfilePosts = ({ profile }) => {
  return (
    <Container className="profile__posts">
      {profile.posts &&
        profile.posts.map((post) => (
          <Row key={post.id}>
            <Link to={`${post.id}`} className="post-link d-flex">
              <div className="posts">
                <h2 className="mb-0">{post.title}</h2>
                <div className="post__details">
                  <p className="post__date">
                    | {new Date(post.created).toLocaleDateString()}
                  </p>
                </div>

                <p className="mt-2">{post.body}</p>
              </div>
            </Link>
          </Row>
        ))}
    </Container>
  );
};

export default ProfilePosts;

/*
import React from "react";

//import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const PostsBy = ({ profile }) => {
  return (
    <>
      <h2>Posts by {profile.name}</h2>
      <div className="postsByOwner">
        {profile.posts &&
          profile.posts.map((post, index) => (
            <Row key={index}>
              <Link to={`${post.id}`} className="post-link d-flex">
                <div className="posts">
                  <h2 className="mb-0">{post.title}</h2>
                  <div className="post__details">
                    <p className="post__date">
                      | {new Date(post.created).toLocaleDateString()}
                    </p>
                  </div>

                  <p className="mt-2">{post.body}</p>
                </div>
              </Link>
            </Row>
          ))}
      </div>
    </>
  );
};

export default PostsBy;
*/
