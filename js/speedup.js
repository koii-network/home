const start = Date.now();

function iframe_lazy_load() {
  var iframes = $('iframe');
  iframes.attr('data-src', function() {
      var src = $(this).attr('src');
      $(this).removeAttr('src');
      return src;
  });
}

$(document).ready(function() {
  iframe_lazy_load()
})