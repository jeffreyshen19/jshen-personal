$(document).scroll(function(){$(this).scrollTop()>.8*$(window).height()-50?$("nav").css({"background-color":"#2C3E50",opacity:.8}):$("nav").css({background:"none"})}),$(function(){$("#header-text").typed({strings:["Hi! I'm Jeffrey"],typeSpeed:30,startDelay:1e3})});