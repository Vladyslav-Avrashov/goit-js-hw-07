const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
function handleNameOutput() {
  refs.nameOutput.textContent = refs.nameInput.value.trim() || "Anonymous";
}
refs.nameInput.addEventListener("input", handleNameOutput);
