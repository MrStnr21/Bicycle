//переменные для темной темы
const darkThemeSwitcher = document.querySelector("#switcher-desktop");
const darkThemeSwitcherMob = document.querySelector("#switcher-mobile");
const bodyDark = document.querySelector(".body");
const pageDark = document.querySelector(".page");
const linkDark = document.querySelectorAll(".menu__link");
const headingDark = document.querySelectorAll(".heading");
const textDark = document.querySelectorAll(".text");
const infoNameDark = document.querySelector(".info__name");
const quoteHeadingDark = document.querySelector(".quote__heading");
const quoteNameDark = document.querySelector(".quote__name");
const quoteSpecialityDark = document.querySelector(".quote__speciality");
const btnSwipeLeftDark = document.querySelector(".buttons-swipe__button-left");
const btnSwipeRightDark = document.querySelector(
  ".buttons-swipe__button-right"
);
const navBtnDark = document.querySelectorAll(".navigation__button");
const gridNameDark = document.querySelectorAll(".grid__name");
const trainingLinkDark = document.querySelectorAll(".training__link");
const footerDark = document.querySelector(".footer");
const footerHeadingDark = document.querySelector(".footer__heading");
const foooterFormContainerDark = document.querySelector(
  ".footer__form-container"
);
const footerFormDark = document.querySelector(".form-container__form");
const footerSubmitDark = document.querySelector(".form-container__submit");
const footerPrivacyDark = document.querySelector(".footer__privacy");
const footerLightDark = document.querySelector(".switcher__light");
const footerButtonDark = document.querySelector(".switcher__button");
const footerDarkDark = document.querySelector(".switcher__dark");
const popupMenu = document.querySelector(".popup-menu");
const headerMenuDark = document.querySelector(".header__image");

//функция добавления/удаления класса
function switchDarkTemplate(element, classname) {
  element.classList.toggle(`${classname}`);
}

function switchThemeSiblings() {
  headingDark.forEach((el) => {
    el.classList.toggle("heading_dark-theme_on");
  });

  linkDark.forEach((el) => {
    el.classList.toggle("menu__link_dark-theme_on");
  });

  navBtnDark.forEach((el) => {
    el.classList.toggle("navigation__button_dark-theme_on");
  });

  gridNameDark.forEach((el) => {
    el.classList.toggle("grid__name_dark-theme_on");
  });

  trainingLinkDark.forEach((el) => {
    el.classList.toggle("training__link_dark-theme_on");
  });

  textDark.forEach((el) => {
    el.classList.toggle("text_dark-theme_on");
  });
}

function switchTheme() {
  switchDarkTemplate(darkThemeSwitcher, "switcher__button_on");
  switchDarkTemplate(bodyDark, "body_dark-theme_on");
  switchDarkTemplate(pageDark, "page_dark-theme_on");
  switchDarkTemplate(infoNameDark, "info__name_dark-theme_on");
  switchDarkTemplate(quoteHeadingDark, "quote__heading_dark-theme_on");
  switchDarkTemplate(quoteNameDark, "quote__name_dark-theme_on");
  switchDarkTemplate(quoteSpecialityDark, "quote__speciality_dark-theme_on");
  switchDarkTemplate(
    btnSwipeLeftDark,
    "buttons-swipe__button-left_dark-theme_on"
  );
  switchDarkTemplate(
    btnSwipeRightDark,
    "buttons-swipe__button-right_dark-theme_on"
  );
  switchDarkTemplate(footerDark, "footer_dark-theme_on");
  switchDarkTemplate(footerHeadingDark, "footer__heading_dark-theme_on");
  switchDarkTemplate(
    foooterFormContainerDark,
    "footer__form-container_dark-theme_on"
  );
  switchDarkTemplate(footerFormDark, "form-container__form_dark-theme_on");
  switchDarkTemplate(footerSubmitDark, "form-container__submit_dark-theme_on");
  switchDarkTemplate(footerPrivacyDark, "footer__privacy_dark-theme_on");
  switchDarkTemplate(footerLightDark, "switcher__light_dark-theme_on");
  switchDarkTemplate(footerButtonDark, "switcher__button_dark-theme_on");
  switchDarkTemplate(footerDarkDark, "switcher__dark_dark-theme_on");
  switchDarkTemplate(messege, "form-container__messege_dark-theme_on");
  switchDarkTemplate(popupMenu, "popup-menu_dark-theme_on");
  switchDarkTemplate(headerMenuDark, "header__image_dark-theme_on");
}

//слушатель переключения темы
darkThemeSwitcher.addEventListener("click", () => {
  switchTheme();
  switchThemeSiblings();
});

darkThemeSwitcherMob.addEventListener("click", () => {
  switchTheme();
  switchThemeSiblings();
});
