let aboutTop = Math.floor($(".under").offset().top);

$(document).scroll((e) => {

  const scrollTop = $(window).scrollTop();

  if (scrollTop + 1100 > aboutTop) {
    $(".box").animate(
      {
        margin: "0",
      },
      1000
    );
  }
});

$('#FormComment').submit((e) => {
  e.preventDefault()
  let ValName = $('#NameInput').val();
  let ValEmail = $('#EmailInput').val();
  let ValMessage = $('#MessageInput').val();
  let data = { name: ValName, email: ValEmail, message: ValMessage }
  $.get("/api/message", data,
    function (res, textStatus, jqXHR) {
      console.log(res);
      $('#NameInput').val('');
      $('#EmailInput').val('');
      $('#MessageInput').val('');
    }
  );
})

