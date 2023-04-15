import React, { useState } from "react";
import { fetchToken } from "../fetchToken.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function DeletePost(props) {
  const [id, setId] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();

    const postBody = {
      id,
    };

    fetchToken(`https://nf-api.onrender.com/api/v1/social/posts/${id}`, {
      method: "DELETE",
      body: JSON.stringify(postBody),
    });
  }

  function onIdChange(event) {
    setId(event.target.value);
  }

  return (
    <div className="edit__post">
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="form-input mb-2">
          <Form.Label>ID</Form.Label>
          <Form.Control
            value={id}
            placeholder="Enter the ID of the post you want to delete"
            onChange={onIdChange}
          ></Form.Control>
        </Form.Group>

        <Button type="submit">Delete</Button>
      </Form>
    </div>
  );
}

export default DeletePost;
