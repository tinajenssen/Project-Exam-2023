// update post

import { API_SOCIAL_URL } from "../constants";
import { fetchToken } from "../fetchToken";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
  const updatePostURL = "${API_SOCIAL_URL}${action}/${postData.id}";

  const response = await fetchToken(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  //return the post
  return await response.json();
}
