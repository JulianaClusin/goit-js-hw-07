// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputValidator = {
  inputText: document.querySelector("input#validation-input"),
}
const checkValidation  = function () {
  if (inputValidator.inputText.value.length === parseInt(inputValidator.inputText.getAttribute("data-length"))) {
      inputValidator.inputText.classList.add("valid");
      inputValidator.inputText.classList.remove("invalid");
  } else {
      inputValidator.inputText.classList.add("invalid");
      inputValidator.inputText.classList.remove("valid");
  }
}
const clearInput = () => {
  inputValidator.inputText.value = "";
  inputValidator.inputText.classList.remove("valid", "invalid");
}

inputValidator.inputText.addEventListener('blur', () => checkValidation());
inputValidator.inputText.addEventListener('click', clearInput);