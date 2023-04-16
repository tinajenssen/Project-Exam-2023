function addComment(entryID, comment) {
  // Create a new comment object
  const newComment = {
    entryID: entryID,
    comment: comment,
  };

  // Make an AJAX call to the API to post the new comment
  fetch("https://noroff-api.herokuapp.com/api/social/posts/comment", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

export default addComment;
//AddComment.jsx

/*
import React, { useState } from "react";
import { API_SOCIAL_URL } from "../../constants.jsx";
import { fetchToken } from "../../fetchToken.jsx";

const action = "/posts/";
const baseUrl = API_SOCIAL_URL + action;

function AddComment(postId) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const url = baseUrl + postId + "/comments";
    const body = {
      content: comment,
    };
    const response = await fetchToken(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    await response.json();
    setComment("");
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <input
        type="text"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write a comment..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default AddComment;


*/
