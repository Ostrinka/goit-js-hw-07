const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  outputName.textContent = inputValue === "" ? "Anonymous" : inputValue;
});

