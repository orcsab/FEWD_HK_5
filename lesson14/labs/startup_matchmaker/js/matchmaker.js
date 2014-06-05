$(function () {

  //  Load the header.  After it is loaded detect the page from which
  //  it was loaded. And set the active class so it is highlighted.
  $('#header').load('header.html', function () {
    var index = document.URL.lastIndexOf('/') + 1;
    var filename = document.URL.substr(index);
    $('.nav').find('.navbar-link').each(function () {
      if ($(this).attr('href') === filename) {
        $(this).parent().addClass('active');
      }
    });
  });
});