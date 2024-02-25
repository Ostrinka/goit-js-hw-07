function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", () => {
  const randomColorBody = getRandomHexColor();
  document.body.style.backgroundColor = randomColorBody;
  const colorSpan = document.querySelector(".color");
  colorSpan.textContent = randomColorBody;
});