// Function to create a new post
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

//import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

const CreateNewPost = (title, content, userId) => {
  const data = {
    title,
    content,
    userId,
  };
  /*
  const settings = {
    method: "GET",
  };
  const response = await fetchToken(url, settings);
*/
  fetchToken("https://nf-api.onrender.com/api/vi/social/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Get the new post and display it on the page using React Bootstrap
      const post = data.post;

      return (
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <h3>tittel</h3>
              </Card.Header>
              <Card.Body>
                <p>body</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
    });
};

export default CreateNewPost;
