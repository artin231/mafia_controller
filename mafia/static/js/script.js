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
  try {
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
        Swal.fire({
          position: "center",
          icon: "success",
          title: "عملیات با موفقیت انجام شد",
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
  catch {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "عملیات با مشکل مواجه شد",
      showConfirmButton: false,
      timer: 1500
    });
  }
})

