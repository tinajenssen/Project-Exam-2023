import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { postsEndpoint, baseUrl  } from "../../constants/Api";
// import PostaComment from "./CommentOnPost";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import "../../css/Posts.css";

// after logging in my token get stored at localstorage
// when I need my token I just:
// const token = localStorage.getItem("token")

// my edit
const baseUrl = "https://api.noroff.dev/api/v1";
//const postsEndpoint = "/social/posts?limit=15&_author=true";
//

const token = localStorage.getItem("token");

const Posts = () => {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    const settings = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      setLoading(true);
      // api request
      const response = await fetch(baseUrl + postsEndpoint, settings);
      const data = await response.json();

      if (response.ok) {
        setPosts(data);
        setLoading(false);
        console.log(data);
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  // return a Spinner when loading is true
  if (loading)
    return (
      //
      <p>spinner</p>
      //
    );
  // else return content
  return (
    <div>
      {posts.map((post) => (
        <div className="posts" id={post.id} data-target={post.id} key={post.id}>
          <div className="postContainer">
            <div className="row">
              <div className="col">
                <Link to={`/feed/profiles/${post.author.name}`}>
                  {post.author.name}
                </Link>
              </div>
              <div className="col followContainer"></div>
            </div>
            <div className="row postBody">
              <div className="col-9">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
              <div className="col-3">
                <small className="post-id">id {post.id}</small>
              </div>

              <p>postaComment</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;

// <PostaComment id={Number(post.id)}/>

/*
<span>
            <FontAwesomeIcon icon={faSpinner} className="fa-solid fa-spinner" />
        </span>

        */
