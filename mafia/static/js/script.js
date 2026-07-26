let aboutTop = Math.floor($(".under").offset().top); 

$(document).scroll((e) => {
  
  const scrollTop = $(window).scrollTop();

  if (scrollTop + 1100 > aboutTop ) {
    $(".box").animate(
      {
        margin: "0",
      },
      1000
    );
  }
});
