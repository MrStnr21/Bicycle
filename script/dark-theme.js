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

//функция добавления/удаления класса
function switchDarkTemplate(element, classname) {
  element.classList.toggle(`${classname}`);
}

function switchThemeSiblings() {
  headingDark.forEach((el) => {
    el.classList.toggle("heading_dark-theme");
  });

  textDark.forEach((el) => {
    el.classList.toggle("text_dark-theme");
  });

  linkDark.forEach((el) => {
    el.classList.toggle("menu__link_dark-theme");
  });

  navBtnDark.forEach((el) => {
    el.classList.toggle("navigation__button_dark-theme");
  });

  gridNameDark.forEach((el) => {
    el.classList.toggle("grid__name_dark-theme");
  });

  trainingLinkDark.forEach((el) => {
    el.classList.toggle("training__link_dark-theme");
  });
}

function switchTheme() {
  switchDarkTemplate(darkThemeSwitcher, "switcher__button_on");
  switchDarkTemplate(bodyDark, "body_dark-theme");
  switchDarkTemplate(pageDark, "page_dark-theme");
  switchDarkTemplate(infoNameDark, "info__name_dark-theme");
  switchDarkTemplate(quoteHeadingDark, "quote__heading_dark-theme");
  switchDarkTemplate(quoteNameDark, "quote__name_dark-theme");
  switchDarkTemplate(quoteSpecialityDark, "quote__speciality_dark-theme");
  switchDarkTemplate(btnSwipeLeftDark, "buttons-swipe__button-left_dark-theme");
  switchDarkTemplate(
    btnSwipeRightDark,
    "buttons-swipe__button-right_dark-theme"
  );
  switchDarkTemplate(footerDark, "footer_dark-theme");
  switchDarkTemplate(footerHeadingDark, "footer__heading_dark-theme");
  switchDarkTemplate(
    foooterFormContainerDark,
    "footer__form-container_dark-theme"
  );
  switchDarkTemplate(footerFormDark, "form-container__form_dark-theme");
  switchDarkTemplate(footerSubmitDark, "form-container__submit_dark-theme");
  switchDarkTemplate(footerPrivacyDark, "footer__privacy_dark-theme");
  switchDarkTemplate(footerLightDark, "switcher__light_dark-theme");
  switchDarkTemplate(footerButtonDark, "switcher__button_dark-theme");
  switchDarkTemplate(footerDarkDark, "switcher__dark_dark-theme");
  switchDarkTemplate(messege, "form-container__messege_dark-theme");
}
console.log(darkThemeSwitcher);
//слушатель переключения темы
darkThemeSwitcher.addEventListener("click", () => {
  switchTheme();
  switchThemeSiblings();
});

darkThemeSwitcherMob.addEventListener("click", () => {
  switchTheme();
  switchThemeSiblings();
});
