// ReactToPost.jsx
import React, { useState } from "react";
import { API_SOCIAL_URL } from "../../constants.jsx";
import { fetchToken } from "../../fetchToken.jsx";

const action = "/posts/";
const baseUrl = API_SOCIAL_URL + action;

function ReactToPost({ post }) {
  const [emoji, setEmoji] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url =
    "https://nf-api.onrender.com/api/v1/social/posts/" + post.id + "/react/";

  const handleEmojiChange = (event) => {
    setEmoji(event.target.value);
  };

  const handleReact = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetchToken(url, {
        method: "PUT",
        body: JSON.stringify({
          symbol: emoji,
        }),
      });

      const json = await response.json();
      // setPost(json);
      console.log(json);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // setIsError(true);
    }
  };

  return (
    <div className="post">
      <form>
        <label>
          Select an emoji to react to the post:
          <select value={emoji} onChange={handleEmojiChange}>
            <option value="">Select an emoji</option>
            <option value="👍">👍</option>
            <option value="😩">😩</option>
            <option value="😊">😊</option>
            <option value="🤔">🤔</option>
            <option value="🤗">🤗</option>
          </select>
        </label>
        <input
          type="submit"
          value="React to Post"
          onClick={handleReact}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}

export default ReactToPost;
