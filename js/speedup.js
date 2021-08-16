const start = Date.now();

function iframe_lazy_load() {
  var iframes = $('iframe');
  iframes.attr('data-src', function() {
      var src = $(this).attr('src');
      $(this).removeAttr('src');
      return src;
  });
}
function iframe_after_load() {
  const millis = Date.now() - start;
  var iframes = $('iframe');
  console.log(`iframe load time offset = ${Math.floor(millis / 1000)}`);
  iframes.attr('src', function() {
      return $(this).data('src');
  });
}

$(document).ready(function() {
  iframe_lazy_load()
})
$(window).load(function() {
  iframe_after_load()
})