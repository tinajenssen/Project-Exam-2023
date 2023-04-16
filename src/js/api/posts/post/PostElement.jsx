import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import DefaultImg from "../../../../img/profile_.png";

function PostElement({ post }) {
  return (
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
            <Link
              to={`/profiles/${post.author && post.author.name}`}
              className="author__name mx-1"
            >
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
  );
}

export default PostElement;
