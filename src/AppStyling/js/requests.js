function mailSender() {
  $("#mailForm").submit(function (e) {
    e.preventDefault();

    let form = $(this);
    let url = form.attr("action");

    $.ajax({
      type: "POST",
      url: url,
      async: false,
      data: form.serialize(),
      success: function (data) {
        document
          .getElementById("mailSendButton")
          .classList.add("effect-motion-bg");
        setTimeout(function () {
          document
            .getElementById("mailSendButton")
            .classList.remove("effect-motion-bg");
          document.getElementById("mailSendButton").innerHTML = "";
          document.getElementById("mailSendButton").classList.add("icon-check");
          document.getElementById("mailSendButton").style.cursor = "none";
        }, 3000);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert("error msg couldnt be sent");
      },
    });
  });
}
