import React from "react";

const Followers = ({ profile }) => {
  return (
    <div className="followers p-2">
      <h4>Followers</h4>
      <p>{profile._count && profile._count.followers}</p>
    </div>
  );
};

export default Followers;
