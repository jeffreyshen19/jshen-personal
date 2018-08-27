/*$(document).scroll(function() {
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
});*/

$(function(){
  $("#header-text").typed({
    strings: ["Hi! I'm Jeffrey"],
    typeSpeed: 30,
    startDelay: 1000
  });
 
  // $(".projects").hide();
  //
  // $('h2.project-header').on('click', function(){
  //   $(this).next().slideToggle('500')
  //   .siblings('li.projects').slideUp();
  //
  //   var icon = $(this).children('.fa-chevron-down');
  //
  //   $('.fa-chevron-down').not(icon).removeClass('rotate');
  //
  //   icon.toggleClass('rotate');
  //
  // });


  $.get("https://jshen-labs.herokuapp.com/updates", function(data){
    for(var i = 0; i < 5; i++){
      var imageURL;

      if(!data[i].image_url.includes("nophoto")){
        var numberOfMs = 0;
        imageURL = data[i].image_url;

        for(var j = 0; j < imageURL.length; j++){
          if(imageURL.charAt(j) == 'm'){
            numberOfMs++;
            if(numberOfMs == 3) {
              imageURL = imageURL.substring(0, j) + "l" + imageURL.substring(j + 1);
              j = imageURL.length;
            }
          }
        }
      }
      else if(data[i].isbn13.nil) imageURL = data[i].image_url;
      else imageURL = "http://covers.openlibrary.org/b/isbn/"+ data[i].isbn13 + "-L.jpg";

      $("#books-row").append("<a class = 'book' target = '_blank' href = '" + data[i].link + "'><img src = '" + imageURL + "'></a>");
    }
  });
});
