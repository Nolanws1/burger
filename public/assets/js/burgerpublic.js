$(function () {
  $(".create-form").on("submit", function (event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("You added a new Burger!");
        location.reload();
      }
    );
  });
});
