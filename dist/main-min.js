$(document).scroll(function(){$(this).scrollTop()>.8*$(window).height()-50?$("nav").css({"background-color":"#2C3E50",opacity:.8}):$("nav").css({background:"none"})}),$(function(){$("#header-text").typed({strings:["Hi! I'm Jeffrey"],typeSpeed:30,startDelay:1e3}),$.get("https://jshen-labs.herokuapp.com/updates",function(o){console.log(o);for(var e=0;e<5;e++){var n;if(o[e].image_url.includes("nophoto"))n="http://covers.openlibrary.org/b/isbn/"+o[e].isbn13+"-L.jpg";else{var r=0;n=o[e].image_url;for(var s=0;s<n.length;s++)"m"==n.charAt(s)&&(r++,3==r&&(n=n.substring(0,s)+"l"+n.substring(s+1),s=n.length))}$("#books-row").append("<a class = 'book' target = '_blank' href = '"+o[e].link+"'><img src = '"+n+"'></a>")}})});