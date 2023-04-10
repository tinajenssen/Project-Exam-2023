import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

import Loading from "../../../components/common/Loading.jsx";

const action = "/posts";
const url = API_SOCIAL_URL + action;

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
                      Posted on {new Date(post.created).toLocaleDateString()}
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

/* bilde
            <img src={post.media} style={{ width: "100%", height: "100%" }} />
            */
/*

   <Row className="posts" id={post.id} data-target={post.id} key={post.id}>
          <Col>
            <Link>Link: {post.author_name}</Link>
          </Col>
          <Col>
            <h3>{post.title}</h3>
            <p>{post.author}</p>
            <p>{post.body}</p>
            <p>{post.created}</p>
          </Col>
          <Col>
            <small className="post-id">id {post.id}</small>
          </Col>
        </Row>

        
        <div className="posts" id={post.id} data-target={post.id} key={post.id}>
          <div className="postContainer">
            <div className="row">
              <div className="col">
                <Link>{post.author_name}</Link>
              </div>
     
            </div>
            <div className="row postBody">
              <div className="col-9">
                <h3>{post.title}</h3>
                <p>{post.author}</p>
                <p>{post.body}</p>
                <p>{post.created}</p>
              </div>
              <div className="col-3">
                <small className="post-id">id {post.id}</small>
              </div>
            </div>
          </div>
        </div>

        */
/*
    <div className="post-card">
      {posts.map(function (post) {
        const { id, title, body, author } = post;
        return (
          <PostItem key={id} title={title} body={body} author={author.name} />
        );
      })}
    </div>
    */

/* Denne virket
 return (
    <div className="post-card">
      {posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
*/

/*
import React, { useEffect, useState } from "react";

import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

const action = "/posts";

const postUrl = API_SOCIAL_URL + action;

function getPosts() {
  const [posts, setPosts] = useState([]);

  // the useEffect will run once when the component first mounts
  useEffect(() => {
    //function that gets our posts
    async function getData() {
      const response = await fetch(postUrl + fetchToken);
      const json = await response.json();
      // setting our posts state to the API data we received
      setPosts(json);
    }
    getData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default getPosts;
*/
/*
export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }
  const getPostURL = "${API_SOCIAL_URL}${action}/${id}";

  const response = await fetchToken(getPostURL);

  return await response.json();
}
*/

// Denne koden consol logger alle poster

/*
import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

const action = "/posts";

export async function getPosts() {
  const updatePostURL = API_SOCIAL_URL + action;
  // const getPostURL = "${API_SOCIAL_URL}${action}";

  const response = await fetchToken(updatePostURL);

  return await response.json();
}

*/
