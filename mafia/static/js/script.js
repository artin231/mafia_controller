let aboutTop = Math.floor($(".about").offset().top); 

$(document).scroll((e) => {
    

  const scrollTop = $(window).scrollTop();
  if (scrollTop + 600 > aboutTop && scrollTop < aboutTop ) {
    $(".box").animate(
      {
        margin: "0",
      },
      1500
    );
  }
});
