import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import GetPosts from "../../js/api/posts/Read";
import GetProfiles from "../../js/api/profiles/GetProfiles";
import Media from "./MediaObject";

function ProfileTabs() {
  return (
    <Tab.Container id="left-tabs" defaultActiveKey="first" className="card">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                className="py-1 mb-2 secondary-btn text-end"
              >
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
              <h1>Posts</h1>
              <GetPosts />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h2>Profiles</h2>
              This is where you can se all profiles
              <GetProfiles />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <h2>Search</h2>
              This is where you can search
              <Media />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default ProfileTabs;
