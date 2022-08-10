//переменные формы
const inputForm = document.querySelector(".footer__form");
const okButton = document.querySelector(".footer__submit");
const messege = document.querySelector(".footer__messege");

//функция вызова кнопки "ок"
function showOk() {
  okButton.classList.add("footer__submit_on");
}

//функция вызова обратной связи
function showMassage() {
  messege.classList.remove("footer__messege_hidden");
  inputForm.classList.add("footer__form_hidden");
}

//слушатели
inputForm.addEventListener("click", showOk);
okButton.addEventListener("click", showMassage);
