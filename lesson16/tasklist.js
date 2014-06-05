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
    this.updateIncomplete(1);
  },

  removeTask: function(desc) {
    $.each ($('#tasklist').find('.text'), function (index, value) {
      var $child = $(value);
      if ($child.text() === desc) {
        $child.parent().remove();
        TASKLIST.updateIncomplete(-1);
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

  updateIncomplete: function (change) {
    this.incomplete += change;
    $('#taskcount').text(this.incomplete);
  },

  toggleComplete: function(desc) {
    console.log('marking complete: ' + desc);

    $.each ($('#tasklist').find('.text'), function (index, value) {
      var $child = $(value);
      if ($child.text() === desc) {
        var strike = $child.css('text-decoration').split(' ')[0];
        console.log('current text decoration: ' + strike);
        if (strike === 'line-through') {
          $child.css('text-decoration', 'none');
          TASKLIST.updateIncomplete(1);
        }
        else {
          $child.css('text-decoration', 'line-through');
          TASKLIST.updateIncomplete(-1);
        }
        return;
      }
    });
  },

  //  the parameter is a boolean stating that all tasks should be
  //  cleared (as opposed to false, which denotes clearing only
  //  completed tasks)
  clear: function (all) {
    console.log('clearing');
    $.each ($('#tasklist').find('.text'), function (index, value) {
      var $child = $(value);
      var strike = $child.css('text-decoration').split(' ')[0];
      if (strike === 'line-through') {
        $child.parent().remove();
      }
      else if (all) {
        $child.parent().remove();
        TASKLIST.updateIncomplete(-1);
      }
    });
  }
};