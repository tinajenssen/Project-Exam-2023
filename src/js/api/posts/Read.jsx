import React, { useEffect, useState } from "react";

import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";
import PostItem from "./PostItem.jsx";

import Loading from "../../../components/common/Loading.jsx";

const action = "/posts";
const url = API_SOCIAL_URL + action;

function GetPosts() {
  const [posts, setPosts] = useState([]);

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
        setPosts(json);
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
    <div className="post-card">
      {posts.map(function (post) {
        const { id, title, body } = post;
        return <PostItem key={id} title={title} body={body} />;
      })}
    </div>
  );
}

export default GetPosts;

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
