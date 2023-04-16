import React, { useState } from "react";
import { fetchToken } from "../fetchToken.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreateNewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [media, setMedia] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();

    if (title === "" || body === "" || media === "") {
      alert("Please fill in all fields before submitting the form");
      return;
    }

    const postBody = {
      title,
      body,
      media,
    };

    fetchToken("https://nf-api.onrender.com/api/v1/social/posts/", {
      method: "POST",
      body: JSON.stringify(postBody),
    }).then((response) => {
      if (response.status === 200) {
        alert("Post was successfully created!");
        setTitle("");
        setBody("");
        setMedia("");
      } else {
        alert("something went wrong. please try agian!");
      }
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
    <div className="create__post">
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="form-input mb-2">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            placeholder="Add title to the post"
            onChange={onTitleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="form-input mb-2">
          <Form.Label>Body</Form.Label>
          <Form.Control
            value={body}
            placeholder="write your text"
            onChange={onBodyChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="form-input mb-2">
          <Form.Label>Media</Form.Label>
          <Form.Control
            value={media}
            placeholder="add url"
            onChange={onMediaChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="form-input mt-4">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CreateNewPost;
