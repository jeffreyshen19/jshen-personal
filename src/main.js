$(document).scroll(function() {
  if($(this).scrollTop() > $(window).height() * 0.8 - 50){
    $("nav").css({
      'background-color': '#2C3E50',
      'opacity': 0.8
    });
  }
  else{
    $("nav").css({
      'background': 'none',
    });
  }
});

$(function(){
  $("#header-text").typed({
    strings: ["Hi! I'm Jeffrey"],
    typeSpeed: 30,
    startDelay: 1000
  });
});
