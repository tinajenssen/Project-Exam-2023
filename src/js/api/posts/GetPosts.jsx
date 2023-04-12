import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

import Loading from "../../../components/common/Loading.jsx";

const action = "/posts";
const author = "?_author=true";
const url = API_SOCIAL_URL + action + author;

function GetPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetchToken(url);
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
      <Container className="all-posts px-4">
        {posts.map((post) => {
          if (post.title && post.body) {
            return (
              <div
                className="d-flex posts"
                id={post.id}
                data-target={post.id}
                key={post.id}
              >
                <Link to={`${post.id}`} className="post-link">
                  <div>
                    <h2>{post.title}</h2>
                    <p className="date">
                      Posted: {new Date(post.created).toLocaleDateString()}
                    </p>
                    <p>{post.body}</p>
                  </div>
                </Link>
              </div>
            );
          }
          return null;
        })}
      </Container>
    </>
  );
}

export default GetPosts;

// if (post.title && post.body && post.media) {
