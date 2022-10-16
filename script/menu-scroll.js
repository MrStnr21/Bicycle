//переменные для скролла "подробнее"
const sectionTrack = document.querySelector(".track");
const sectionBicycles = document.querySelector(".bicycles");
const sectionTrainings = document.querySelector(".training");
const buttonDetail = document.querySelector(".button");
const buttonTracks = document.querySelector("#tracks");
const buttonBicycles = document.querySelector("#bicycles");
const buttonTrainings = document.querySelector("#trainings");
const buttonTracksMobile = document.querySelector("#tracks-mobile");
const buttonBicyclesMobile = document.querySelector("#bicycles-mobile");
const buttonTrainingsMobile = document.querySelector("#trainings-mobile");

//функция скролла
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

//слушатели скролла
buttonDetail.addEventListener("click", scrollingDetail);
buttonTracks.addEventListener("click", scrollingTrack);
buttonBicycles.addEventListener("click", scrollingBicycles);
buttonTrainings.addEventListener("click", scrollingTrainings);

buttonTracksMobile.addEventListener("click", () => {
  scrollingTrack();
  headerMenu.classList.add("popup-menu_hidden");
});

buttonBicyclesMobile.addEventListener("click", () => {
  scrollingBicycles();
  headerMenu.classList.add("popup-menu_hidden");
});

buttonTrainingsMobile.addEventListener("click", () => {
  scrollingTrainings();
  headerMenu.classList.add("popup-menu_hidden");
});
