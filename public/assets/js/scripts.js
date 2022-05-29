$(".submit").click(function () {
  var form = $(".signup-form").closest("form");
  var button = $(this);
  button.html("Saving...");

  var signup_url = "http://localhost:5001";

  $.ajax({
    type: "POST",
    data: form.serialize(),
    url: signup_url,
    success: function (response) {
      //This is where you can add you logic after the signup is done
    },
  });
});
