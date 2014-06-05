var TASKLIST = {
  incomplete: 0,

  addTask: function (desc) {
    var html = '';
    html += '<div class="task">';
    html += '<li> <span class="text">' + desc + '</span>';
    html += '<a href="#" class="edit">edit</a>';
    html += '<a href="#" class="remove">remove</a>';
    html += '<input type="text" name="editbox">';
    html += '</li>';
    html += '</div>';
    $('#tasklist').append(html);
    this.incomplete++;
    $('#taskcount').text(this.incomplete);
  },

  removeTask: function(desc) {
    $.each ($('#tasklist').find('.text'), function (index, value) {
      var $child = $(value);
      if ($child.text() === desc) {
        $child.parent().remove();
        incomplete--;
        return;
      }
    });
  },

  updateTask: function (oldDesc, newDesc) {
    console.log('update task from ' + oldDesc + ' to ' + newDesc);
    $.each ($('#tasklist').find('.text'), function (index, value) {
      var $child = $(value);
      if ($child.text() === oldDesc) {
        $child.text(newDesc);
        return;
      }
    });
  },

  markComplete: function(index) {

  },

  markIncomplete: function(index) {

  }
};