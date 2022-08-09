// объявление переменных для скролла "подробнее"
const sectionTrack = document.querySelector(".track");
const sectionBicycles = document.querySelector(".bicycles");
const sectionTrainings = document.querySelector(".training");
const buttonDetail = document.querySelector(".button");
const buttonTracks = document.querySelector("#tracks");
const buttonBicycles = document.querySelector("#bicycles");
const buttonTrainings = document.querySelector("#trainings");

// функция скролла
function scrollingDetail() {
  sectionTrack.scrollIntoView({ behavior: "smooth" });
}

function scrollingTrack() {
  sectionTrack.scrollIntoView({ behavior: "smooth" });
}

function scrollingBicycles() {
  sectionBicycles.scrollIntoView({ behavior: "smooth" });
}

function scrollingTrainings() {
  sectionTrainings.scrollIntoView({ behavior: "smooth" });
}

// слушатели
buttonDetail.addEventListener("click", scrollingDetail);
buttonTracks.addEventListener("click", scrollingTrack);
buttonBicycles.addEventListener("click", scrollingBicycles);
buttonTrainings.addEventListener("click", scrollingTrainings);
