//переменные
const highwayButton = document.querySelector("#highwayButton");
const gravelButton = document.querySelector("#gravelButton");
const TTButton = document.querySelector("#TTButton");
const highwayBicycles = document.querySelector("#highway-bicycles");
const gravelBicycles = document.querySelector("#gravel-bicycles");
const TTBicycles = document.querySelector("#TT-bicycles");
const firstBicycle = document.querySelector("#firstImage");
const secondBicycle = document.querySelector("#secondImage");
const thirdBicycle = document.querySelector("#thirdImage");
const bicyclesList = document.querySelector(".grid__navigation");

//функция перелючения типов велосипедов
function addType(element) {
  element.classList.remove("grid__navigation_hidden");
}

function removeType(element) {
  element.classList.add("grid__navigation_hidden");
}

function activeType(element) {
  element.classList.add("navigation__button_active");
}

function diactiveType(element) {
  element.classList.remove("navigation__button_active");
}

function chooseHighway() {
  addType(highwayBicycles);
  removeType(TTBicycles);
  removeType(gravelBicycles);
  activeType(highwayButton);
  diactiveType(TTButton);
  diactiveType(gravelButton);
}

function chooseGravel() {
  addType(gravelBicycles);
  removeType(TTBicycles);
  removeType(highwayBicycles);
  activeType(gravelButton);
  diactiveType(TTButton);
  diactiveType(highwayButton);
}

function chooseTT() {
  addType(TTBicycles);
  removeType(gravelBicycles);
  removeType(highwayBicycles);
  activeType(TTButton);
  diactiveType(highwayButton);
  diactiveType(gravelButton);
}

//слушатели
highwayButton.addEventListener("click", () => {
  chooseHighway();
});

gravelButton.addEventListener("click", () => {
  chooseGravel();
});

TTButton.addEventListener("click", () => {
  chooseTT();
});

function scrollImagesFirst(el) {
  el.scrollTo(0, 0);
}

function scrollImagesSecond(el) {
  el.scrollTo(300, 0);
}

function scrollImagesThird(el) {
  el.scrollTo(600, 0);
}

function activeImage(add, remove1, remove2) {
  add.classList.add("grid__button-scroll_active");
  remove1.classList.remove("grid__button-scroll_active");
  remove2.classList.remove("grid__button-scroll_active");
}

firstBicycle.addEventListener("click", function scrollBicyclesFirst() {
  scrollImagesFirst(highwayBicycles);
  scrollImagesFirst(gravelBicycles);
  scrollImagesFirst(TTBicycles);
  activeImage(firstBicycle, secondBicycle, thirdBicycle);
});

secondBicycle.addEventListener("click", function scrollBicyclesSecond() {
  scrollImagesSecond(highwayBicycles);
  scrollImagesSecond(gravelBicycles);
  scrollImagesSecond(TTBicycles);
  activeImage(secondBicycle, firstBicycle, thirdBicycle);
});

thirdBicycle.addEventListener("click", function scrollBicyclesThird() {
  scrollImagesThird(highwayBicycles);
  scrollImagesThird(gravelBicycles);
  scrollImagesThird(TTBicycles);
  activeImage(thirdBicycle, secondBicycle, firstBicycle);
});

//функция переключения типа через select
let select = document.querySelector(".bicycles__selector");
let bicyclesListSelect = document.querySelectorAll(".grid__navigation");
let lastIndex = 0;

select.addEventListener("change", function () {
  bicyclesListSelect[lastIndex].style.display = "none";

  let index = select.selectedIndex;
  bicyclesListSelect[index].style.display = "flex";

  lastIndex = index;
});
