$(function () {

  $(".change-toEaten").on("click", function(event) {

    event.preventDefault();

    var id = $(this).data("id");
    var eaten = 1;

    var nowEaten = {
      devoured: eaten
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: nowEaten
    }).then(
      function() {
        console.log("changed sleep to", nowEaten);
        location.reload();
      }
    );
  });

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
