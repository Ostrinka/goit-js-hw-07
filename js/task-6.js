function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
input.style = `border: 1px solid #808080;
border-radius: 8px;
width: 150px;
height: 40px;`

const btnCreate = document.querySelector("button[data-create]");
btnCreate.style = `font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.04em;
color: #fff;
border-radius: 8px;
padding: 8px 16px;
width: 120px;
height: 40px;
background: #4e75ff;`

const btnDestroy = document.querySelector("button[data-destroy]");
btnDestroy.style = `font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.04em;
color: #fff;
border-radius: 8px;
padding: 8px 16px;
width: 120px;
height: 40px;
background: #ff4e4e;`


const container = document.getElementById("boxes");
btnCreate.addEventListener("click", () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } 
});

btnDestroy.addEventListener("click", (destroyBoxes) => {
  container.innerHTML = '';
});

function createBoxes(amount) {
  container.innerHTML = '';
  let side = 30;
  for (let i = 0; i < amount; i++) {
    let newBox = `<div style="width: ${side}px; height: ${side}px; background-color: ${getRandomHexColor()}"></div>`;
      container.insertAdjacentHTML("beforeend", newBox);
    side += 10;
  }
}


