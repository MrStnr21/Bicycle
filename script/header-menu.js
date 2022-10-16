//переменные меню хедера
const headerMenuButton = document.querySelector(".header__button");
const headerMenuCloseButton = document.querySelector(
  ".popup-menu__button-close"
);
const headerMenu = document.querySelector(".popup-menu");
console.log(headerMenuButton);

//слушатели открытия/закрытия попапа
headerMenuButton.addEventListener("click", () => {
  headerMenu.classList.remove("popup-menu_hidden");
});

headerMenuCloseButton.addEventListener("click", () => {
  headerMenu.classList.add("popup-menu_hidden");
});
