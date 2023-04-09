import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

import Loading from "../../../components/common/Loading.jsx";

const action = "/posts/";
const baseUrl = API_SOCIAL_URL + action;

function GetThisPost() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate.push("/");
  }

  const author = "?_author=true";
  const url = baseUrl + id + author;

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetchToken(url);
        const json = await response.json();
        setPost(json);
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
      <Breadcrumb className="breadcrumb pt-4 pb-2">
        <Breadcrumb.Item href="/posts"> Posts</Breadcrumb.Item>
        <Breadcrumb.Item active>{post.title}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="post__element pb-5">
        <img className="post__img my-2" src={post.media} alt="" />
        <h1 className="post__title">{post.title}</h1>
        <p className="post__name mt-2">{post.body}</p>
      </div>
    </>
  );
}

export default GetThisPost;
