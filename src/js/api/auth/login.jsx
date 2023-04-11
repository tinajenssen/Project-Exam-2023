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
    // hvis login var vellykket, lagre token i localstorage
    // og kall onSuccess callback
    const { accessToken, ...user } = result;
    storage.save("token", accessToken);
    storage.save("profile", user);

    // basic UX
    alert("you are now logged in");
    onSuccess();
  } else {
    // Hvis login feilet, gi beskjed til brukeren
    alert("Login failed. Please try again");
    console.error(result);
  }
}
