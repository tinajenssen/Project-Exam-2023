//GetThisPost.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";
import { Link } from "react-router-dom";
import Loading from "../../../components/common/Loading.jsx";
import PostElement from "./PostElement.jsx";
import Reactions from "./Reactions.jsx";
import Comments from "./Comments.jsx";

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
/*
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";
import { Link } from "react-router-dom";
import Loading from "../../../components/common/Loading.jsx";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../img/profile_.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <div className="post__element pb-5">
          <img className="post__img my-2" src={post.media} alt="" />
          <Container className="justify-content author py-2">
            <Row>
              <Col className="author__avatar">
                {(post.author && post.author.avatar === "") ||
                (post.author && post.author.avatar === null) ? (
                  <Image
                    src={DefaultImg}
                    alt="User have not uploaded an avatar yet"
                    className="avatar pt-2"
                  />
                ) : (
                  <Image
                    src={post.author && post.author.avatar}
                    alt="Users avatar"
                    className="avatar pt-2"
                  />
                )}
              </Col>
              <Col className="postedBy">
                <Link className="author__name mx-1">
                  {" "}
                  {post.author && post.author.name}
                </Link>
                <p className="posted__date">
                  Posted: {new Date(post.created).toLocaleDateString()}
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="post__content my-2">
            <h1>{post.title}</h1>
            <p className="mt-2">{post.body}</p>
          </Container>
        </div>

        <Container className="reactions mt-5">
          <h5>Reactions</h5>
          <Container className="justify-content reaction py-2">
            {post.reactions &&
              post.reactions.map((reaction, index) => (
                <div key={index}>
                  <Container className="x">
                    <div className="reaction__symbol">{reaction.symbol}</div>
                    <div className="reaction__count">{reaction.count}</div>
                  </Container>
                </div>
              ))}
          </Container>
        </Container>

        <Container className="comments mt-5">
          <h5>Comments</h5>
          <Container className="justify-content comment py-2">
            {post.comments &&
              post.comments.map((comment, index) => (
                <div key={index}>
                  <Container className="d-flex comment__by">
                    <Row>
                      <Col className="author__avatar">
                        {comment.author.avatar === "" ||
                        comment.author.avatar === null ? (
                          <Image
                            src={DefaultImg}
                            alt="User have not uploaded an avatar yet"
                            className="avatar pt-2"
                          />
                        ) : (
                          <Image
                            src={comment.author.avatar}
                            alt="Users avatar"
                            className="avatar pt-2"
                          />
                        )}
                      </Col>
                      <Col className="postedBy">
                        <Link className="author__name mx-1">
                          {" "}
                          {comment.author.name}
                        </Link>
                        <p className="posted__date">
                          Posted:{" "}
                          {new Date(comment.created).toLocaleDateString()}
                        </p>
                      </Col>
                    </Row>
                  </Container>

                  <p className="comment__content">{comment.body}</p>
                </div>
              ))}
          </Container>
        </Container>
      </div>
    </>
  );
}

export default GetThisPost;
*/
