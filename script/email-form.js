//переменные формы
const inputForm = document.querySelector(".form-container__form");
const okButton = document.querySelector(".form-container__submit");
const messege = document.querySelector(".form-container__messege");

//функция вызова кнопки "ок"
function showOk() {
  okButton.classList.add("form-container__submit_on");
}

//функция вызова обратной связи
function showMassage() {
  messege.classList.remove("form-container__messege_hidden");
  inputForm.classList.add("form-container__form_hidden");
}

//слушатели
inputForm.addEventListener("click", showOk);
okButton.addEventListener("click", showMassage);
