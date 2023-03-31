import { register } from "../api/auth/register.jsx";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    register(profile);
  });
}

//
