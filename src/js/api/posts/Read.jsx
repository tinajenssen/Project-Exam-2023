// see posts

import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

const action = "/posts";

export async function getPosts() {
  const updatePostURL = "${API_SOCIAL_URL}${action}";

  const response = await fetchToken(updatePostURL);

  return await response.json();
}

export async function getPost(id) {
  const getPostURL = "${API_SOCIAL_URL}${action}/${id}";

  const response = await fetchToken(getPostURL);

  return await response.json();
}
