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
