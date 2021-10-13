$(".second .info-links").css("text-shadow", " 0 5px 8px hsl(7, 99%, 70%)");

// INFO SECTION
let a = screen.width;
if( a >= 1200){
  $(".first").attr("src", "images/desktop/image-transform.jpg");
  $(".second").attr("src", "images/desktop/image-stand-out.jpg");
}

// FEATURES SECTION

if( a < 1200 ){
  $(".graphic-design").css("background-image", "url(" + "images/mobile/image-graphic-design.jpg" + ")");
  $(".photography").css("background-image", "url(" + "images/mobile/image-photography.jpg" + ")");
}
