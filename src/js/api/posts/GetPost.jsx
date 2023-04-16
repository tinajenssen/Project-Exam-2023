import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";
import Loading from "../../../components/common/Loading.jsx";
import PostElement from "./post/PostElement.jsx";
import Reactions from "./post/Reactions.jsx";
import Comments from "./post/Comments.jsx";

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
  const comments = "&_comments=true";
  const reactions = "&_reactions=true";
  const url = baseUrl + id + author + comments + reactions;

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

      <div className="post">
        <PostElement post={post} />
        <Reactions post={post} />
        <Comments post={post} />
      </div>
    </>
  );
}

export default GetThisPost;
