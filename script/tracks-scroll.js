//кнопки скролла
const buttonLeft = document.querySelector("#buttonLeft");
const buttonRight = document.querySelector("#buttonRight");

//переменные скролла загаловка
const headingList = document.querySelector(".track__heading-container");
let headingSlide = document.querySelectorAll(".track__heading");

//переменные скролла описания
const tracksContainer = document.querySelector(".track__text-container");
let aboutSlide = document.querySelectorAll(".track__text");

//переменные скролла картинок
const tracksList = document.querySelector(".track__type");
let typeSlide = document.querySelectorAll(".type__item");

//переменные скролла символа
const symbolContainer = document.querySelector(".track__symbol");
let symbolSlide = document.querySelectorAll(".symbol__vector");

//функция скролла загаловка
function scrollHeadingNext() {
  const headingSlideWidth = headingSlide.clientWidth;
  headingList.scrollLeft += headingSlideWidth;
  headingList.appendChild(headingSlide[0]);
  headingSlide = document.querySelectorAll(".track__heading");
}

function scrollHeadingBack() {
  const headingSlideWidth = headingSlide.clientWidth;
  headingList.scrollLeft -= headingSlideWidth;
  headingList.insertBefore(
    headingSlide[headingSlide.length - 1],
    headingSlide[0]
  );
  headingSlide = document.querySelectorAll(".track__heading");
}

//функция скролла описания
function scrollAboutNext() {
  const aboutSlideWidth = aboutSlide.clientWidth;
  tracksContainer.scrollLeft += aboutSlideWidth;
  tracksContainer.appendChild(aboutSlide[0]);
  aboutSlide = document.querySelectorAll(".track__text");
}

function scrollAboutBack() {
  const aboutSlideWidth = aboutSlide.clientWidth;
  tracksContainer.scrollLeft -= aboutSlideWidth;
  tracksContainer.insertBefore(
    aboutSlide[aboutSlide.length - 1],
    aboutSlide[0]
  );
  aboutSlide = document.querySelectorAll(".track__text");
}

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
  scrollHeadingNext();
  scrollIamgeNext();
  scrollAboutNext();
  scrollSymbolNext();
}

function scrollBack() {
  scrollHeadingBack();
  scrollIamgeBack();
  scrollAboutBack();
  scrollSymbolBack();
}

//слушатели скролла
buttonRight.addEventListener("click", scrollNext);
buttonLeft.addEventListener("click", scrollBack);
