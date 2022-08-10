//кнопки скролла
const buttonLeft = document.querySelector("#buttonLeft");
const buttonRight = document.querySelector("#buttonRight");

//переменные скролла картинок
const tracksList = document.querySelector(".track__type");
let typeSlide = document.querySelectorAll(".type__item");

//переменные скролла описания
const tracksContainer = document.querySelector(".track__about-container");
let aboutSlide = document.querySelectorAll(".track__about");

//переменные скролла символа
const symbolContainer = document.querySelector(".track__symbol");
let symbolSlide = document.querySelectorAll(".symbol__vector");

//функция скролла картинок
function scrollIamgeNext() {
  const typeSlideWidth = typeSlide.clientWidth;
  tracksList.scrollLeft += typeSlideWidth;
  tracksList.appendChild(typeSlide[0]);
  typeSlide = document.querySelectorAll(".type__item");
}

function scrollIamgeBack() {
  const typeSlideWidth = typeSlide.clientWidth;
  tracksList.scrollLeft -= typeSlideWidth;
  tracksList.insertBefore(typeSlide[typeSlide.length - 1], typeSlide[0]);
  typeSlide = document.querySelectorAll(".type__item");
}

//функция скролла описания
function scrollAboutNext() {
  const aboutSlideWidth = aboutSlide.clientWidth;
  tracksContainer.scrollLeft += aboutSlideWidth;
  tracksContainer.appendChild(aboutSlide[0]);
  aboutSlide = document.querySelectorAll(".track__about");
}

function scrollAboutBack() {
  const aboutSlideWidth = aboutSlide.clientWidth;
  tracksContainer.scrollLeft -= aboutSlideWidth;
  tracksContainer.insertBefore(
    aboutSlide[aboutSlide.length - 1],
    aboutSlide[0]
  );
  aboutSlide = document.querySelectorAll(".track__about");
}

//функция скролла символа
function scrollSymbolNext() {
  const symbolSlideWidth = symbolSlide.clientWidth;
  symbolContainer.scrollLeft += symbolSlideWidth;
  symbolContainer.appendChild(symbolSlide[0]);
  symbolSlide = document.querySelectorAll(".symbol__vector");
}

function scrollSymbolBack() {
  const symbolSlideWidth = symbolSlide.clientWidth;
  symbolContainer.scrollLeft -= symbolSlideWidth;
  symbolContainer.insertBefore(
    symbolSlide[symbolSlide.length - 1],
    symbolSlide[0]
  );
  symbolSlide = document.querySelectorAll(".symbol__vector");
}

// функция скролла по кнопкам
function scrollNext() {
  scrollIamgeNext();
  scrollAboutNext();
  scrollSymbolNext();
}

function scrollBack() {
  scrollIamgeBack();
  scrollAboutBack();
  scrollSymbolBack();
}

//слушатели скролла
buttonRight.addEventListener("click", scrollNext);
buttonLeft.addEventListener("click", scrollBack);
