// delete post

import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
  const updatePostURL = "${API_SOCIAL_URL}${action}/${id}";

  const response = await fetchToken(updatePostURL, {
    method,
  });

  //return the post
  return await response.json();
}
