import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function ListOfPosts() {
  return (
    <Container>
      <Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </Container>
  );
}

export default ListOfPosts;

/*

  <Nav.Link href="/profile">
              <img src={Profile} className="profile-img" alt="user profile" />
            </Nav.Link>

            */
