$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.contain_cover').animate({
        width: 'hide'
      }, 'slow')
    } else {
      $('.contain_cover').animate({
        width: 'show'
      }, 'slow')
    }
    if ($(this).scrollTop() > 300) {
      $('.card').fadeIn(1000)
    } else {
      $('.card').fadeOut(1000)
    }



  });

});