import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../img/profile_.png";
import ToggleButton from "react-bootstrap/ToggleButton";

function ProfileList(props) {
  const { profile } = props;
  const [isFollowing, setIsFollowing] = useState(false);

  const follow = () => {
    // Call API endpoint to follow profile
    setIsFollowing(true);
    console.log("following profile");
  };

  const unfollow = () => {
    // Call API endpoint to unfollow profile
    setIsFollowing(false);
    console.log("unfollowing profile");
  };

  return (
    <div className="d-flex profiles" id={profile.id} data-target={profile.id}>
      <div className="me-3 profile__avatar col-md-2">
        {profile.avatar === "" || profile.avatar === null ? (
          <Image src={DefaultImg} alt="Users avatar" />
        ) : (
          <Image src={profile.avatar} alt="Users avatar" />
        )}
      </div>

      <h2 className="profile__name ps-2 col-md-8">
        <Link to={`${profile.name}`} className="profile__link">
          {profile.name}
        </Link>
      </h2>
      <div className="col-md-2 my-auto">
        {isFollowing ? (
          <ToggleButton
            variant="secondary"
            className="btn--unfollow"
            onClick={unfollow}
          >
            Unfollow
          </ToggleButton>
        ) : (
          <ToggleButton variant="secondary" onClick={follow}>
            Follow
          </ToggleButton>
        )}
      </div>
    </div>
  );
}

export default ProfileList;

/* ok kode uten follow */

/*
import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../img/profile_.png";

function ProfileList(props) {
  const { profile } = props;
  return (
    <div className="d-flex profiles" id={profile.id} data-target={profile.id}>
      <div className="me-3 profile__avatar col-md-2">
        {profile.avatar === "" || profile.avatar === null ? (
          <Image src={DefaultImg} alt="Users avatar" />
        ) : (
          <Image src={profile.avatar} alt="Users avatar" />
        )}
      </div>

      <h2 className="profile__name ps-2 col-md-8">
        <Link to={`${profile.name}`} className="profile__link">
          {profile.name}
        </Link>
      </h2>
      <div className="btn--follow col-md-2">Follow</div>
    </div>
  );
}

export default ProfileList;
*/
