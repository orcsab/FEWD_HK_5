$(function() {
  var drops = ['international', 'politics', 'business', 'technology',
               'culture', 'blogs'];

  $('.international').click( function () {showDropDown ('international'); } );
  $('.politics').click( function () {showDropDown ('politics'); } );
  $('.business').click( function () {showDropDown ('business'); } );
  $('.technology').click( function () {showDropDown ('technology'); } );
  $('.culture').click( function () {showDropDown ('culture'); } );
  $('.blogs').click( function () {showDropDown ('blogs'); } );

  function showDropDown (name) {
    var id = '#' + name + '-drop';
    //  special case: if the named dropdown is already being displayed then hide
    //  the drop down menu.
    if ($(id).hasClass('open')) {
      $('#slide-down').removeClass('open');
      $('#slide-down').hide();
      $(id).removeClass('open');
      $('#primary-nav').children().removeClass('active');
    }
    else {
      //  make sure slide-down is open and showed.  these statements may be redundant
      //  as previous calls may have left the menu open.
      $('#slide-down').addClass('open');
      $('#slide-down').show();

      //  Hide every drop-down.  This is overkill since only one of them can currently
      //  be shown.
      for (i in drops) {
        var loopId = '#' + drops[i] + '-drop';
        $(loopId).hide();
        $(loopId).removeClass('open');
      }

      //  Show the selected submenu.
      $(id).addClass('open');
      $(id).show();

      //  Make sure the nav bar shows the right selection.
      $('#primary-nav').children().removeClass('active');
      $('#primary-nav').children('.' + name).addClass('active');
    }

    return false;
  }

  function display (name) {
    console.log('showing ' + name);
    $(name).show();
  };

  function toggleView (name) {
    console.log('toggling visibility for ' + name);
    $(name).toggle();
  };

  function toggleClass (target, name) {
    console.log ('for ' + target + ' toggling ' + name);
    $(target).toggleClass(name);
  };

});