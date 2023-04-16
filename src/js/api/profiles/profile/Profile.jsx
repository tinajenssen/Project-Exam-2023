import React from "react";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../../img/profile_.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FollowUnfollow from "./FollowUnfollow";

const Profile = ({ profile }) => {
  return (
    <Container className=" profile__details">
      {profile.avatar === "" || profile.avatar === null ? (
        <Image
          src={DefaultImg}
          alt="User have not uploaded an avatar yet"
          className="avatar pt-2"
        />
      ) : (
        <Image
          src={profile.avatar}
          alt="Users avatar"
          className="avatar pt-2"
        />
      )}
      <h2 className="text-center pt-3">{profile.name}</h2>
      <Row className="follow__group mt-2">
        <Col sm="6" className="follow__count">
          {profile._count && profile._count.followers}
        </Col>
        <Col sm="6" className="follow__count">
          {profile._count && profile._count.following}
        </Col>
        <Col sm="6" className="count__label">
          Followers
        </Col>
        <Col sm="6" className="count__label">
          Following
        </Col>
      </Row>
      <FollowUnfollow />
    </Container>
  );
};

export default Profile;
