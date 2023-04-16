import { API_SOCIAL_URL } from "../constants.jsx";

const action = "/auth/register";
const method = "POST";

export async function register(profile, onSuccess) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  console.log("registerURL", registerURL);
  console.log("body", body);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  console.log("response", response);

  const result = await response.json();

  if (response.ok) {
    onSuccess();
  } else {
    alert("Registration failed. Please try again");
    console.error(result);
  }
}
