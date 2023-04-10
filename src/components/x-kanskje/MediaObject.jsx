import React from "react";

export default function Media() {
  return (
    <div className="d-flex">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        alt="Users Avatar"
        className="me-3 rounded-circle"
        style={{ width: "60px", height: "60px" }}
      />
      <div>
        <h2> Title </h2>
        <small className="text-muted">Posted on February 19, 2021</small>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

/*
 <div className="postContainer">
        <div className="row">
          <div className="col">
            <Link>{post.author_name}</Link>
          </div>
 
        </div>
        <div className="row postBody">
          <div className="col-9">
            <h3>{post.title}</h3>
            <p>{post.author}</p>
            <p>{post.body}</p>
            <p>{post.created}</p>
          </div>
          <div className="col-3">
            <small className="post-id">id {post.id}</small>
          </div>
        </div>
      </div>

      */
