// Create post

import { API_SOCIAL_URL } from "../constants";
import { fetchToken } from "../fetchToken";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await fetchToken(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  //return the post
  return await response.json();
}
