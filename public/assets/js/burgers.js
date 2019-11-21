// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
 $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = { //br
      burger_name: $("#newburger").val().trim(),
      devoured: 0
      // $("[name=devoured]:checked").val().trim()
    };

     // Send the POST request.
     $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Create new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  // .change-devoured
  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    //newdevoured
    // var devouredState = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

 // Send the PUT request.
 $.ajax("/api/burgers/" + id, {
  type: "PUT",
  data: devouredState
}).then(
  function() {
    console.log("Burger devoured");
    // Reload the page to get the updated list
    location.reload();
  }
)

});
$(".trashburger").on("click", function (event){
  event.preventDefault();

  var id = $(this).data("id");

  //Send the DELETE request
  $.ajax({
    type: "DELETE",
    url: "/api/burgers/" + id
})  .then(location.reload());
})
 });

 // Export routes for server.js to use.
module.exports = router;
