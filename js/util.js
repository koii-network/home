/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function ($) {
  "use strict"; // Start of use strict

  $(document.body).scroll(function () {
    var aTop = $("#topbar").height();
    if ($(this).scrollTop() >= aTop) {
      console.log("$(this).scrollTop()", $(this).scrollTop(), aTop);
      $("#topbar").css({ background: 'linear-gradient(90.16deg, #030332 0.14%, #171753 99.87%)', boxShadow: "0px 10px 10px -7px rgb(0 0 0 / 30%)" });
    } else {
      $("#topbar").css({ background: 'transparent', boxShadow: "unset" });
    }
  });
})(jQuery); // End of use strict
