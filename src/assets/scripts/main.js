var $element = $(".element");
var elementsPositions = [];

$element.each(function (i, el) {
  elementsPositions.push([$(el).offset().top, el])
});

console.log(elementsPositions);

var checkElements = function () {

  elementsPositions.forEach(function (item, i) {
    if (document.body.clientHeight - item[0] + window.pageYOffset > 100) {
      $(item[1]).addClass("-active");
    }
  })
}

//
$(window).scroll(function () {
  checkElements()
});
checkElements()
