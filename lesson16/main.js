$(function() {
  $('#newtask').submit(function (event) {
    event.preventDefault();
    console.log('appending task ' + $('#taskdesc').val());
    TASKLIST.addTask($('#taskdesc').val());
  });

  $('#tasklist').on('click', 'li .remove', function() {
    var desc = $(this).parent().children('.text').text();
    console.log('desc = ' + desc);
    TASKLIST.removeTask(desc);
  });
});