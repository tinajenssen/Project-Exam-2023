import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import AllPosts from "../../js/api/posts/GetPosts";
//import Posts from "../post/GetPosts";
//import ListOfPosts from "../post/ListOfPosts";
// import getPosts from "../../js/api/posts/Read";
//import ListOfPosts from "../../js/api/posts/GetPosts";
import GetPosts from "../../js/api/posts/GetPosts.jsx";

function ProfileTabs() {
  return (
    <Tab.Container id="left-tabs" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" className="py-1 mb-2 secondary-btn">
                Posts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="py-1 mb-2 secondary-btn">
                Profiles
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="py-1 secondary-btn">
                Search
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h2>Posts</h2>
              This is where all the posts will show
              <GetPosts />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h2>Profiles</h2>
              This is where you can se all profiles
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <h2>Search</h2>
              This is where you can search
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ProfileTabs;
