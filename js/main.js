$(function () {

  $('.exemplas-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button class="slider-button slider-button--exemplas-left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V9H6L10 5L9 3L2 10L9 17L10 15L6 11H18Z" fill="#473534"/></svg></button>',
    nextArrow: '<button class="slider-button slider-button--exemplas-right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11V9H14L10 5L11 3L18 10L11 17L10 15L14 11H2Z" fill="#473534"/></svg></button>',
  });

  $('.testimonials-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-button slider-button--testimonials-left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V9H6L10 5L9 3L2 10L9 17L10 15L6 11H18Z" fill="#473534"/></svg></button>',
    nextArrow: '<button class="slider-button slider-button--testimonials-right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11V9H14L10 5L11 3L18 10L11 17L10 15L14 11H2Z" fill="#473534"/></svg></button>',
  });

  $('.search__button').on('click', function () {
    $('.search__field').toggleClass('open');
  });

  $('.burger__button').on('click', function () {
    $('.burger__button').toggleClass('active');
    $('.header__button-box').toggleClass('active');
    $('.navigation').toggleClass('active');
  });

});