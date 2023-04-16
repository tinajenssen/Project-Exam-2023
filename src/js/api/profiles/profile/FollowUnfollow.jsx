import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

function FollowUnfollow() {
  const [isFollowing, setIsFollowing] = useState(false);

  const follow = () => {
    setIsFollowing(true);
    console.log("following profile");
  };

  const unfollow = () => {
    setIsFollowing(false);
    console.log("unfollowing profile");
  };

  return (
    <div>
      {isFollowing ? (
        <ToggleButton
          variant="secondary"
          className="profile__btn--unfollow"
          onClick={unfollow}
        >
          Unfollow
        </ToggleButton>
      ) : (
        <ToggleButton
          variant="secondary"
          className="profile__btn--follow"
          onClick={follow}
        >
          Follow
        </ToggleButton>
      )}
    </div>
  );
}

export default FollowUnfollow;

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
