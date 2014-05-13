$(function() {
  //  setup a click handler for each of the nav options.
  $('nav').on('click','li', function(event) {showDropDown(event, $(this).attr('id'));} );

  //  show the named drop down.
  //  arguments:
  //  *  event: the event passed to click callback
  //  *  name: the name of the selected menu item.  this name matches an entry in the
  //           drops variable.
  function showDropDown (event, name) {
    console.log('showDropDown called with name = ' + name);
    var id = '#' + name + '-drop';
    //  special case: if the named dropdown is already being displayed then hide
    //  the drop down menu.
    if ($(id).hasClass('open')) {
      $slidedown = $('#slide-down');
      $slidedown.slideUp().removeClass('open');
      $(id).removeClass('open');
      $('#primary-nav').children().removeClass('active');
    }
    else {
      //  first check if there are no active members of the nav menu.  if there
      //  are none, then the nav status is inactive.  if it is active, then logic
      //  below will avoid some things that are redundant or unattractive to
      //  a visible menu.
      var navActive = false;
      if ($('#primary-nav').children('.active').length !== 0) {
        navActive = true;
      }

      //  Hide everything.  Of course this is overkill because everything but
      //  one is already hidden.  But this is a single-line of code so I like.
      $('#slide-down').children().hide().removeClass('open');

      //  Make sure the nav bar shows the right selection.  First clear all selections
      //  then set the current one to active.
      $primarynav = $('#primary-nav');
      $primarynav.children().removeClass('active');
      $primarynav.children('#' + name).addClass('active');

      //  Show the selected submenu.
      $(id).addClass('open').show();

      //  show the slide-down ID if its not already shown.
      if (!navActive)
        $('#slide-down').addClass('open').slideDown();
    }

    //  stop the scrolling to the newly revealed submenu.  it seems either of the
    //  two statements does this.  which should I use?
    event.preventDefault();
  }

  //  not used.
  function display (name) {
    console.log('showing ' + name);
    $(name).show();
  };

  // not used.
  function toggleView (name) {
    console.log('toggling visibility for ' + name);
    $(name).toggle();
  };

  function toggleClass (target, name) {
    console.log ('for ' + target + ' toggling ' + name);
    $(target).toggleClass(name);
  };

});