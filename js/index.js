$(function () {

  var $Dot = $('.toggling-dot');
  var timerDot;

  timerDot = setInterval(function () {
    if ($Dot.hasClass('active')) {
      $Dot.removeClass('active');
    } else {
      $Dot.addClass('active');
    }
  }, 500);

});
