$('button').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $('a').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#elem").offset().top
    }, 500);
    return false;
  });


