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

  $.get("https://jshen-labs.herokuapp.com/updates", function(data){
    console.log(data);
    for(var i = 0; i < 3; i++){
      var imageURL = data[i].image_url;
      var numberOfMs = 0;
      for(var j = 0; j < imageURL.length; j++){
        if(imageURL.charAt(j) == 'm'){
          numberOfMs++;
          if(numberOfMs == 3) {
            imageURL = imageURL.substring(0, j) + "l" + imageURL.substring(j + 1);
            j = imageURL.length;
          }
        }
      }
      $("#books-row").append("<a class = 'book' target = '_blank' href = '" + data[i].link + "'><img src = '" + imageURL + "'></a>");
    }
  });
});
