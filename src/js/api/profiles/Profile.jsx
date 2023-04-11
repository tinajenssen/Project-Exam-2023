import React from "react";
import { Image } from "react-bootstrap";
import DefaultImg from "../../../img/profile_.png";

const Profile = ({ profile }) => {
  return (
    <div className="profile">
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

      <h2 className="text-center pt-2">{profile.name}</h2>
    </div>
  );
};

export default Profile;
