import { API_SOCIAL_URL } from "../constants.jsx";

import * as storage from "../../storage/index.jsx";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();
  storage.save("token", accessToken);
  storage.save("profile", user);

  // basic UX
  alert("you are now logged in");
}
