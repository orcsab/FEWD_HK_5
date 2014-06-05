var TASKLIST = {
  incomplete: 0,

  addTask: function (desc) {
    var html = '';
    html += '<div>';
    html += '<li> <span class="text">' + desc + '</span>';
    html += '<a href="#" class="edit">edit</a>';
    html += '<a href="#" class="remove">remove</a>';
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

  markComplete: function(index) {

  },

  markIncomplete: function(index) {

  }
};