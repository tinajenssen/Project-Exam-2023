import { register } from "../api/auth/register.jsx";

export function setRegisterFormListener(onSuccess) {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    console.log("submitting");
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    // Sender inn profile og onSuccess callback
    register(profile, onSuccess);
  });
}
