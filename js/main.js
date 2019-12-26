var resizeIframe = function() {
  var size;
  if ($(window).width() > 780) {
    size = 400;
  }
  else {
    size = $(window).width() - 20;
  }
  $('iframe').attr({
    width: size,
    height: size
  });
};

$(function() {
  $('.photos').slick({
    adaptiveHeight: true,
    autoplay: false,
    slidesToShow: 1,
    speed: 300,
    mobileFirst: true,
    dots: true
  });

  resizeIframe();
});

$(window).resize(function() {
  resizeIframe();
});

var disqus_config = function () {
  this.page.url = 'http://wedding-invi.herokuapp.com/'; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = 'wed-invi'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');

s.src = '//wedinvi.disqus.com/embed.js';

s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
