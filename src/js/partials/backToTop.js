
function scrollingUp(button) {
  /* scroll to top */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 220) {
      $(button).fadeIn(500);
    } else {
      $(button).fadeOut(500);
    }
  });
  /* btn-up */
  $(document).on('click', button, function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
}