$(document).ready(function() {
    $('.slider_ph').slick({
      autoplay: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 768,
        settings: {
          autoplay: false,
        }
      }]
    });
  });

  $(document).ready(function() {
    $('.slider_r').slick({
      autoplay: false,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 768,
        settings: {
          autoplay: false,
        }
      }]
    });
  });

  $(document).ready(function() {
    $('.slider_rt').slick({
      autoplay: false,
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [{
        breakpoint: 768,
        settings: {
          autoplay: false,
        }
      }]
    });
  });

let burger = document.querySelector('.burger');

let burgerIn = document.querySelector('.burger_in');

let localMain = document.querySelector('.local_main');


let theme = document.querySelector('.theme');
let like = document.querySelector('.like');
let container = document.querySelector('.container');

let themeM = document.querySelector('.theme_m');

burger.onclick = function(){
  burger.classList.toggle('burger_open');

  burgerIn.classList.toggle('db');

  localMain.classList.toggle('mg_top');
};

theme.onclick = function(){
  container.classList.toggle('container_dark');
};

themeM.onclick = function(){
  container.classList.toggle('container_dark');
}