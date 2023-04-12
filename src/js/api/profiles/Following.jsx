import React from "react";

const Following = ({ profile }) => {
  return (
    <div className="following p-2">
      <h4>Following</h4>
      <p>{profile._count && profile._count.following}</p>
    </div>
  );
};

export default Following;
