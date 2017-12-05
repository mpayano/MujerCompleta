$(document).ready(function(){
  $(".ramon_Text").on("click", function(){
    $(".ramon_Text").css("display", "none");
    $(".ramon_Paragraph").css("display", "block");
    $(".ramon_Paragraph").animate({top: "175px" });
  });

  $(".stirvax_Text").on("click", function(){
    $(".stirvax_Text").css("display", "none");
    $(".stirvax_Paragraph").css("display", "block");
    $(".stirvax_Paragraph").animate({top: "178px" });
  });

  $(".orquis_Text").on("click", function(){
    $(".orquis_Text").css("display", "none");
    $(".orquis_Paragraph").css("display", "block");
    $(".orquis_Paragraph").animate({top: "177px" });
  });

  $(".rose_Text").on("click", function(){
    $(".rose_Text").css("display", "none");
    $(".rose_Paragraph").css("display", "block");
    $(".rose_Paragraph").animate({top: "178px" });
  });

  $(".ariel_Text").on("click", function(){
    $(".ariel_Text").css("display", "none");
    $(".ariel_Paragraph").css("display", "block");
    $(".ariel_Paragraph").animate({top: "178px" });
  });

  $(".suji_Text").on("click", function(){
    $(".suji_Text").css("display", "none");
    $(".suji_Paragraph").css("display", "block");
    $(".suji_Paragraph").animate({top: "178px" });
  });

  $('.autoplay').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });
});
