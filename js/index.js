$("document").ready(function(){
  
  $("#about").click(function(){
    $('html, body').animate({
    scrollTop: $("#sectAbout").offset().top
    },650);
  }); 
  
  $("#port").click(function(){
    $('html, body').animate({
    scrollTop: $("#sectPortfolio").offset().top
    },800);
  });
  
  $("#contact").click(function(){
    $('html, body').animate({
    scrollTop: $("#sectContact").offset().top
    },2000);
  });
  
  $("#back").click(function(){
    $('html, body').animate({
    scrollTop: $("#top").offset().top
    },2000);
  });
   
});