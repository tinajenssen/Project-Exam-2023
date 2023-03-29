export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    console.log(profile);
  });
}

/*  Alternativ kode
const name = form.name.value
  const email = form.email.value
  const password = form.password.value
  const banner = form.banner.value
  const avatar = form.avatar.value

  const profile = {
      name,
      email,
      password,
      banner,
      avatar
  }
  */
