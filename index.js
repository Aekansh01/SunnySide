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
  $(".gal-first").css("background-image", "url(" + "images/mobile/image-gallery-orange.jpg" + ")");
  $(".gal-second").css("background-image", "url(" + "images/mobile/image-gallery-cone.jpg" + ")");
  $(".gal-third").css("background-image", "url(" + "images/mobile/image-gallery-sugar-cubes.jpg" + ")");
  $(".gal-forth").css("background-image", "url(" + "images/mobile/image-gallery-milkbottles.jpg" + ")");
}

//GALLERY SECTION

if( a <= 990){
  $(".test").addClass("col-6 gal-forth");
}

if(a <= 991 ){
  $("form").addClass("nav-link");
  $("form .btn").removeClass("btn-light");
  $("form .btn").addClass("btn-warning");
  $(".nav-link").css("color", "hsl(232, 10%, 55%)");
}

if(a > 991){
  $("div #box").css("display", "none");
}
