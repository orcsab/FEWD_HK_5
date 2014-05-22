$("#add").click(function () {
  $("#list").append('<li class="item">new item</li>');
});

// The following doesn't work for newly inserted item
$(".item").click(function () {
  alert("a <li> is clicked");
});

// Solution: Use the .on() to implement the event handler on the parent
// $("#list").on("click", ".item", function () {
//   alert("a <li> is clicked");
// });