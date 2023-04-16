/*
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

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Following = ({ profile }) => {
  return (
    <>
      <div className="following__profiles">
        {profile.posts &&
          profile.posts.map((post, index) => (
            <Row key={index}>
      
                <div className="posts">
                  <h2 className="mb-0">{post.title}</h2>

                  <p className="post__date">
                    {new Date(post.created).toLocaleDateString()}
                  </p>

                  <p className="mt-2">{post.body}</p>
                </div>
   
            </Row>
          ))}
      </div>
    </>
  );
};

export default PostsBy;
*/
