// ny kode

//auth.jsx
import { API_SOCIAL_URL } from "../constants.jsx";
import * as storage from "../../storage/index.jsx";

const action = "/auth/login";
const method = "POST";

export async function login(profile, onSuccess) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();

  if (response.ok) {
    const { accessToken, ...user } = result;
    storage.save("token", accessToken);
    storage.save("profile", user);

    // ny kode:
    storage.save("name", user.name);

    onSuccess();
  } else {
    alert("Login failed. Please try again");
    console.error(result);
  }
}

/* kode ok */

/*
import { API_SOCIAL_URL } from "../constants.jsx";
import * as storage from "../../storage/index.jsx";

const action = "/auth/login";
const method = "POST";

export async function login(profile, onSuccess) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();

  if (response.ok) {
    const { accessToken, ...user } = result;
    storage.save("token", accessToken);
    storage.save("profile", user);

    onSuccess();
  } else {
    alert("Login failed. Please try again");
    console.error(result);
  }
}
*/
