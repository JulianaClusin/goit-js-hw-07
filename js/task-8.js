// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input
//  и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>
// <div id="boxes"></div>

let amount;
const boxes = document.querySelector("#boxes");
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector('input[type="number"]');

function randomBgColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${x}, ${y}, ${z})`;
  return bgColor;
}

function createBoxes(amount) {
  const width = 30;
  const step = 10;
  const arr = [];
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${width + i * step}px`;
    div.style.height = `${width + i * step}px`;
    div.style.background = randomBgColor();
    arr.push(div.outerHTML);
  }
  input.value = 0;
  return arr.join("");
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = 0;
}

input.addEventListener("change", () => {
  amount = Number(input.value);
});
render.addEventListener("click", () => {
  boxes.insertAdjacentHTML("afterbegin", `${createBoxes(input.value)}`);
});
destroy.addEventListener("click", destroyBoxes);