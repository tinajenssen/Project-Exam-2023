// Edit Post function

import React, { useState } from "react";
import { fetchToken } from "../fetchToken.jsx";

function EditPost(postId) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [media, setMedia] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();

    const body = {
      title,
      body,
      media,
    };

    fetchToken(`https://nf-api.onrender.com/api/v1/social/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  function onTitleChange(event) {
    setTitle(event.target.value);
  }

  function onBodyChange(event) {
    setBody(event.target.value);
  }

  function onMediaChange(event) {
    setMedia(event.target.value);
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          value={title}
          placeholder="write your title"
          onChange={onTitleChange}
        />
        <input
          value={body}
          placeholder="write your text"
          onChange={onBodyChange}
        />
        <input value={media} placeholder="add url" onChange={onMediaChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditPost;
