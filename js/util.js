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
      $("#topbar").css({ position: "fixed", boxShadow: "0px 10px 10px -7px rgb(0 0 0 / 30%)" });
      // alert("header just passed.");
      // instead of alert you can use to show your ad
      // something like $('#footAd').slideup();
    } else {
      $("#topbar").css({ position: "relative", boxShadow: "unset" });
    }
  });
})(jQuery); // End of use strict
