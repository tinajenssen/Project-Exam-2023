// Comments.jsx
import React from "react";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../../img/profile_.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Comments({ post }) {
  return (
    <Container className="comments mt-2">
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
                      Posted: {new Date(comment.created).toLocaleDateString()}
                    </p>
                  </Col>
                </Row>
              </Container>

              <p className="comment__content">{comment.body}</p>
            </div>
          ))}
      </Container>
    </Container>
  );
}

export default Comments;
