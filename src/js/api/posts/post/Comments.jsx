// Comments.jsx
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import DefaultImg from "../../../../img/profile_.png";

function Comments({ post }) {
  return (
    <Container className="comments mt-2">
      <h5>Comments</h5>
      <Container className="justify-content py-2 px-0 mx-0">
        {post.comments &&
          post.comments.map((comment, index) => (
            <div key={index} className="comment">
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
