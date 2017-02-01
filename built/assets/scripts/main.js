"use strict";

$(document).ready(function () {

  var $element = $(".element");
  var elementsPositions = [];

  $element.each(function (i, el) {
    elementsPositions.push([$(el).offset().top, el]);
  });

  var checkElements = function checkElements() {

    elementsPositions.forEach(function (item, i) {
      if (document.body.clientHeight - item[0] + window.pageYOffset > 100) {
        $(item[1]).addClass("-active");
      }
    });
  };

  $(window).scroll(function () {
    checkElements();
  });
  checkElements();

  var $names = $('.name');
  $('header.header .headline .name').on('click', function (e) {
    e.preventDefault();

    $(this).addClass('-hide');
    if ($(this).next('.name').length) {
      $(this).next().removeClass('-hide');
    } else {
      $names.first().removeClass('-hide');
    }
  });
});