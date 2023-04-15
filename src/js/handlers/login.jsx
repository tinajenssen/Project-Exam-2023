import { login } from "../api/auth/login.jsx";

export function setLoginFormListener(onSuccess) {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    login(profile, onSuccess);
  });
}

/* ny kode */

// handlers.jsx
/*
import { login } from "../api/auth/login.jsx";

export function setLoginFormListener(onSuccess) {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    const user = await login(profile);
    if (user) {
      onSuccess(user.name);
    }
  });
}
*/
