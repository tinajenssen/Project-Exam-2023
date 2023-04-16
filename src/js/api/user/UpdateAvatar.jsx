// PUT request

import React, { useState } from "react";
import { fetchToken } from "../fetchToken.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

function UpdateMediaUrl(props) {
  const [avatar, setAvatar] = useState("");
  const [banner, setBanner] = useState("");

  const name = localStorage.getItem("name");

  function onFormSubmit(event) {
    event.preventDefault();

    const body = {
      avatar,
      banner,
    };

    fetchToken(
      `https://nf-api.onrender.com/api/v1/social/profiles/${name}/media`,
      {
        method: "PUT",
        body: JSON.stringify(body),
      }
    );
  }

  function onAvatarChange(event) {
    setAvatar(event.target.value);
  }

  function onBannerChange(event) {
    setBanner(event.target.value);
  }

  return (
    <div className="updateMedia">
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="form-input mb-2">
          <Form.Label>Banner</Form.Label>
          <Form.Control
            value={banner}
            placeholder="new url"
            onChange={onBannerChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="form-input mb-2">
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            value={avatar}
            placeholder="new url"
            onChange={onAvatarChange}
          ></Form.Control>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default UpdateMediaUrl;
