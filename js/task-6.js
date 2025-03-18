function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  input: document.querySelector("input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
function createBoxes(amount) {
  if (amount < 1 || amount > 100) return;
  let markup = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    markup += `<div style='height: ${size}px; width: ${size}px; background-color: ${getRandomHexColor()}'></div>`;
    size += 10;
  }
  refs.boxes.innerHTML = markup;
}
function destroyBoxes() {
  refs.boxes.textContent = "";
}

function handleCreateClick() {
  createBoxes(Number(refs.input.value));
  refs.input.value = "";
}
function handleDestroyClick() {
  destroyBoxes();
}
refs.create.addEventListener("click", handleCreateClick);
refs.destroy.addEventListener("click", handleDestroyClick);
