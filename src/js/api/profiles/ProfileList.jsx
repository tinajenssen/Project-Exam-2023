import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../img/profile_.png";
import ToggleButton from "react-bootstrap/ToggleButton";

function ProfileList(props) {
  const { profile } = props;
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
    <>
      <div className="profile__group" key={profile.name}>
        <Link to={`${profile.name}`} className="profile__link">
          <div
            className="d-flex  profile"
            id={profile.name}
            data-target={profile.name}
          >
            <div className="me-3 profile__avatar">
              {profile.avatar === "" || profile.avatar === null ? (
                <Image src={DefaultImg} alt="Users avatar" />
              ) : (
                <Image src={profile.avatar} alt="Users avatar" />
              )}
            </div>

            <h4 className="profile__name ps-2">{profile.name}</h4>
          </div>
        </Link>
        <div className="my-auto follow d-flex justify-content-end">
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
    </>
  );
}

export default ProfileList;
