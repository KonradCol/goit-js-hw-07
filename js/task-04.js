function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}

const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", () => {
  const input = document.querySelector("input");
  const amount = parseInt(input.value);
  createBoxes(amount);
});

const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", destroyBoxes);
