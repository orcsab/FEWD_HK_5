$(function() {
  $('#newtask').submit(function (event) {
    event.preventDefault();
    console.log('appending task ' + $('#taskdesc').val());
    TASKLIST.addTask($('#taskdesc').val());
  });

  $('#tasklist').on('click', 'td .remove', function() {
    var desc = $(this).parent().children('.text').text();
    console.log('desc = ' + desc);
    TASKLIST.removeTask(desc);
  });

  $('#tasklist').on('click', 'td .edit', function() {
    console.log('captured edit click');
    $input = $(this).parent().children('input');
    $input.keypress (function (e) {
      if (e.which == 13) {
        console.log(e);
        var olddesc = $(e.target).parent().children('.text').text();
        var newdesc = e.target.value;
        TASKLIST.updateTask(olddesc, newdesc);
        $(e.target).hide();
      }
    });
    $input.show();
  });

  $('#tasklist').on('click', 'td .text', function() {
    var desc = $(this).text();
    console.log('desc = ' + desc);
    TASKLIST.toggleComplete(desc);
  });

  $('#clear-all').click(function () {
    TASKLIST.clear(true);
  });

  $('#clear-complete').click(function () {
    TASKLIST.clear(false);
  });
});