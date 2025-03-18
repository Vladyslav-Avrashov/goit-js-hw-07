const loginForm = document.querySelector(".login-form");
const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };
  if (data.email === "" || data.password === "") {
    return alert("All form fields must be filled in");
  }
  console.log(data);
  form.reset();
};
loginForm.addEventListener("submit", handleSubmit);
