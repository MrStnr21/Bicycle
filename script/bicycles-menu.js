//переменные
const highwayButton = document.querySelector("#highwayButton");
const gravelButton = document.querySelector("#gravelButton");
const TTButton = document.querySelector("#TTButton");
const highwayBicycles = document.querySelector("#highway-bicycles");
const gravelBicycles = document.querySelector("#gravel-bicycles");
const TTBicycles = document.querySelector("#TT-bicycles");

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
