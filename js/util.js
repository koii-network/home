/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
  "use strict"; // Start of use strict
  $(document.body).scroll(function () {
    var aTop = $("#topbar").height();
    var pathname = window.location.pathname;
    if (pathname === "/") {
      if ($(this).scrollTop() >= aTop) {
        // console.log("$(this).scrollTop()", $(this).scrollTop(), aTop);
        // $("#topbar").css({
        //   background:
        //     "linear-gradient(90.16deg, #030332 0.14%, #171753 99.87%)",
        //   boxShadow: "0px 10px 10px -7px rgb(0 0 0 / 30%)",
        // });
      } else {
        // console.log("here1")
        // $("#topbar").css({ boxShadow: "unset" }); // background: "transparent", 
      }
    }
  });
  $(document).ready(function () {
    var pathname = window.location.pathname;
    if (pathname === "/") {
      $("#topbar").css({ boxShadow: 'unset' }); // background: "transparent", 
    }
    $("#topbar").click(function() {
      if($(this).hasClass('isOpened')) {
        $(this).removeClass('isOpened')
        // $("#topbar").css({ background: "transparent", boxShadow: "unset" });
      }else{
        $(this).addClass('isOpened')
        // $("#topbar").css({
        //   background:
        //     "linear-gradient(90.16deg, #030332 0.14%, #171753 99.87%)",
        //   boxShadow: "0px 10px 10px -7px rgb(0 0 0 / 30%)",
        // });
      }
    });

    $(document).click(function (event) {
      var clickover = $(event.target);
      var _opened = $(".navbar-collapse").hasClass("show");
      if (_opened === true && !clickover.hasClass("in-nav")) {
          $("button.navbar-toggler").click();
      }
    });
    $(".pre-register-area").click(function() {
      var url = 'https://forms.gle/XCGys2sqFcdpekP7A'
      location.href = url
    });
  });
})(jQuery); // End of use strict
