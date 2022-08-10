//кнопки скролла
const buttonLeft = document.querySelector("#buttonLeft");
const buttonRight = document.querySelector("#buttonRight");

//скролл картинок
const tracksList = document.querySelector(".track__type");
let typeSlide = document.querySelectorAll(".type__item");

//скролл описания
const tracksContainer = document.querySelector(".track__about-container");
let aboutSlide = document.querySelectorAll(".track__about");

//скролл символа
const symbolContainer = document.querySelector(".track__symbol");
let symbolSlide = document.querySelectorAll(".symbol__vector");

// функция скролла по кнопкам
function scrollNext() {
  //скролл картинки
  const typeSlideWidth = typeSlide.clientWidth;
  tracksList.scrollLeft += typeSlideWidth;
  tracksList.appendChild(typeSlide[0]);
  typeSlide = document.querySelectorAll(".type__item");
  //скролл описания
  const aboutSlideWidth = aboutSlide.clientWidth;
  tracksContainer.scrollLeft += aboutSlideWidth;
  tracksContainer.appendChild(aboutSlide[0]);
  aboutSlide = document.querySelectorAll(".track__about");
  //скролл символа
  const symbolSlideWidth = symbolSlide.clientWidth;
  symbolContainer.scrollLeft += symbolSlideWidth;
  symbolContainer.appendChild(symbolSlide[0]);
  symbolSlide = document.querySelectorAll(".symbol__vector");
}

function scrollBack() {
  //скролл картинки
  const typeSlideWidth = typeSlide.clientWidth;
  tracksList.scrollLeft -= typeSlideWidth;
  tracksList.insertBefore(typeSlide[typeSlide.length - 1], typeSlide[0]);
  typeSlide = document.querySelectorAll(".type__item");
  //скролл описания
  const aboutSlideWidth = aboutSlide.clientWidth;
  tracksContainer.scrollLeft -= aboutSlideWidth;
  tracksContainer.insertBefore(
    aboutSlide[aboutSlide.length - 1],
    aboutSlide[0]
  );
  aboutSlide = document.querySelectorAll(".track__about");
  //скролл символа
  const symbolSlideWidth = symbolSlide.clientWidth;
  symbolContainer.scrollLeft -= symbolSlideWidth;
  symbolContainer.insertBefore(
    symbolSlide[symbolSlide.length - 1],
    symbolSlide[0]
  );
  symbolSlide = document.querySelectorAll(".symbol__vector");
}

//слушатели скролла
buttonRight.addEventListener("click", scrollNext);
buttonLeft.addEventListener("click", scrollBack);