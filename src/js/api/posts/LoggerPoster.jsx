import { API_SOCIAL_URL } from "../constants.jsx";
import { fetchToken } from "../fetchToken.jsx";

const action = "/posts";

export async function PostsAll() {
  const updatePostURL = API_SOCIAL_URL + action;
  // const getPostURL = "${API_SOCIAL_URL}${action}";

  const response = await fetchToken(updatePostURL);

  return await response.json();
}
