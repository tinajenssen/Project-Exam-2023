import React, { useState } from "react";
import { post } from "../../fetchToken.jsx";

function AddComment({ postId }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      body: comment,
    };
    const url = `${API_SOCIAL_URL}/posts/${postId}/comments`;
    try {
      await post(url, data);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment"
      ></textarea>
      <button type="submit">Comment</button>
    </form>
  );
}

export default AddComment;
