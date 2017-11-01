$(document).ready(function(){
$(".navbar li a[href^='#']").on('click', function(event) {
  var target = this.hash;

  event.preventDefault();

  var navOffset = $('#navbar').height();

  return $('html, body').animate({
    scrollTop: $(this.hash).offset().top - navOffset
  }, 1500, function() {
    return window.history.pushState(null, null, target);
  });
});
})
//$(document).ready(function(){
//
//  $(".navbar .lien_interne a").on('click', function(event) {

//    event.preventDefault();
//    var hash = this.hash;

//    $('html, body').animate({
//        scrollTop: $(hash).offset().top
//    }, 2000)
//  });
//
//})﻿
