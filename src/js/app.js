$(window).scroll(function() {
var theta = $(window).scrollTop() / 30 % Math.PI;
$('#rotateWrap').css({ transform: 'rotate(' + theta + 'rad)' });
});

$(document).ready(function() {
  $(".change-btn").on("click", function() {
    $("header").toggleClass("bgWhite");
    $("svg").toggleClass("fillBlue");
    $("body").toggleClass("bgBlue");
    $("footer").toggleClass("bgWhite");
    $("h1").toggleClass("colorBlue");
    $(".title").toggleClass("colorWhite");
    $(".title").toggleClass("bottomWhite");
    $("p").toggleClass("colorWhite");
    $(".footer-menu li a").toggleClass("colorBlue");
    $(".news-title").toggleClass("colorBlue");
  });
});
