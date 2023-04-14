import React, { useState } from "react";
import { fetchToken } from "../fetchToken.jsx";

function CreateNewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [media, setMedia] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();

    const postBody = {
      title,
      body,
      media,
    };

    fetchToken("https://nf-api.onrender.com/api/v1/social/posts/", {
      method: "POST",
      body: JSON.stringify(postBody),
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

export default CreateNewPost;
