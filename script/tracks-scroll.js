//переменные скролла

//const tracksList = document.querySelector(".track__type");
//tracksList.scrollTop = 1;
const slide = document.querySelector("#typeItem");
//const buttonLeft = document.querySelector("#buttonLeft");
//const buttonRight = document.querySelector("#buttonRight");
const highway = document.querySelector("#one");
const gravel = document.querySelector("#two");
const TT = document.querySelector("#three");
const itemWidth = document.querySelector(".type__item").clientWidth

//функция функция бесконечного скролла

// функция скролла по кнопкам
/*
buttonRight.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  tracksList.scrollLeft += slideWidth;
});

buttonLeft.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  tracksList.scrollLeft -= slideWidth;
});

tracksList.addEventListener("scroll", function () {
    gravel.classList.remove('track__about_hidden')
    highway.classList.add('track__about_hidden')
    TT.classList.add('track__about_hidden')
}); */

document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.track__type');
    var items = document.querySelectorAll('.type__item');
    
    var prev = document.querySelector('#buttonLeft');
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.type__item');
    });
    
    var next = document.querySelector('#buttonRight');
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.type__item');
    });
  });