var Categories = ['learn', 'earn', 'connect', 'explore']
var isHomePage = false
function showSubMenu(category, sm) {
  const subMenu = $("#sub_menu")
  subMenu.find('.sub-menu-container').css('display', 'none')
  subMenu.find('.sub-menu-container.sub-' + category).css('display', 'flex')
  if (subMenu.hasClass('active')) $("#sub_menu").removeClass('active')
  else $("#sub_menu").addClass('active')
}
function openSubMenu(category, subMenu) {
  // console.log(category)
  // console.log(subMenu)
  var pathname = window.location.pathname;
  if (pathname.includes('/' + category) || category === 'learn' || category === 'earn') {
    // console.log({pathname})
    showSubMenu(category, subMenu)
  } else {
    if (subMenu) {
      location.href = '/' + category + '/' + subMenu
    } else {
      location.href = '/' + category
    }
  }
}
function revolution_show_video() {
  $('#my-video-display').prettyEmbed({
    videoID: 'zoxAW6R9NEM',
    previewSize: 'thumb-default',				// use either this option...
    customPreviewImage: 'https://img.youtube.com/vi/zoxAW6R9NEM/0.jpg',			// ...or this option

    // Embed controls
    showInfo: true,
    showControls: true,
    loop: false,

    colorScheme: 'dark',
    showRelated: false,

    // useFitVids: true
  });
}
function getRupeesFormat(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}
function num_animations() {
  $(".numerial-item").each(function () {
    console.log($(this))
    $(this).addClass('active')
  })
  $('.num').each(function () {

    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(getRupeesFormat(Math.ceil(now)));
      }
    })
  })
}
function httpGet(theUrl) {
  jQuery.ajax({
    type: 'GET',
    url: theUrl,
    dataType: 'json',
    success: function (data) {
      if (data) {
        // console.log("success api call")
        $(".num_users").text(data.users)
        $(".pre_register").text(data.pre_register)
        $(".total_attention").text(data.total_attention)
        num_animations()
      } else {
        // console.log("error api call")
        $(".num_users").text(14244)
        $(".pre_register").text(21141)
        $(".total_attention").text(8016332)
        setTimeout(function () {
          num_animations()
        }, 100)
      }
    },
    error: function (err) {
      // console.log(err);
      // console.log('Failed!');
      $(".num_users").text(2894)
      $(".num_koii_earned").text(88240)
      $(".num_atomic_nfts").text(3325)
      setTimeout(function () {
        num_animations()
      }, 100)
    }
  });
}
function setActiveMenu(category, subCategory) {
  // console.log("category :", category)
  // console.log("sub :", subCategory)
  if (category === '') {
    httpGet('https://koii.live/info.json')
    return
  }
  $("#topbar .web-header .nav-item").each(function (index, value) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    }
  })
  $("#topbar .mobile-header .nav-item").each(function (index, value) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    }
  })
  $("#sub_menu .sub-menu-container.sub-" + category + " .sub-menu-item").each(function (index, value) {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    }
  })
  $("#topbar .web-header .nav-item.nav-" + category).addClass('active')
  $("#topbar .mobile-header .nav-item.nav-" + category).addClass('active')
  switch (category) {
    case 'learn':
      $("#sub_menu .sub-menu-container.sub-" + category + " .sub-menu-item.sub-menu-" + subCategory).addClass('active')
      break;
    case 'earn':
      $("#sub_menu .sub-menu-container.sub-" + category + " .sub-menu-item.sub-menu-" + subCategory).addClass('active')
      break;
    case 'connect':

      break;
    case 'explore':

      break;
    default:
      break;
  }
}
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function goToMailchimp(email) {
  $('.input-subscription').val('')
  window.location.href = 'http://eepurl.com/hv7r5D'
}

var slideIndex = 1;
function show_slide() {
  showSlides(slideIndex);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// homepage roadmap
var cbp_fwcurrent = 0;
function prevFwCurrent() {
  $(".horizontal-roadmap-prev").css("display", "flex");
  $(".horizontal-roadmap-next").css("display", "flex");
  cbp_fwcurrent--;
  if (cbp_fwcurrent === 0) {
    $(".horizontal-roadmap-prev").css("display", "none");
  }
  // console.log("current : " + cbp_fwcurrent)
}
function nextFwCurrent() {
  $(".horizontal-roadmap-prev").css("display", "flex");
  $(".horizontal-roadmap-next").css("display", "flex");
  cbp_fwcurrent++;
  if (cbp_fwcurrent === 3) {
    $(".horizontal-roadmap-next").css("display", "none");
  }
  // console.log("current : " + cbp_fwcurrent)
}
var offset = 0;
var count = $(".slide-item-wrapper > * > *").length;
var activeVSlider = 0
var div_height = 640;
// window.setInterval(
//   function() {
//     offset = (offset - 104) % (count * 104); // 104px div height (incl margin)
//     $(".slide-item-wrapper > *").css({
//       "transform": "translateY(" + offset + "px)",
//     });
//   }, 3000);
function vertical_slider(direction = 'next') {
  $(".vertical-roadmap-prev").css("visibility", "visible");
  $(".vertical-roadmap-next").css("visibility", "visible");
  if (direction === 'next') activeVSlider++
  if (direction === 'prev') activeVSlider--
  offset = -1 * div_height * activeVSlider
  if (activeVSlider === 0) {
    offset = 0
    $(".vertical-roadmap-prev").css("visibility", "hidden");
  }
  else if (activeVSlider === 3) {
    $(".vertical-roadmap-next").css("visibility", "hidden");
  }
  // offset = (offset - div_height) % (count * div_height); // 104px div height (incl margin) -620,-1240,0
  $(".slide-item-wrapper > *").css({
    "transform": "translateY(" + offset + "px)",
  });
}

function centerPositionOfDiv(obj) {
  let x_left = 0, y_top = 0
  y_top = obj.offset().top + obj.height() / 2
  x_left = obj.offset().left + obj.width() / 2
  return { left: x_left, top: y_top }
}
function wings_img_spin() {
  var mouseXY = {};
  $(document).on("mousemove", function (event) {
    mouseXY.X = event.pageX;
    mouseXY.Y = event.pageY;
  });
  var iCow = $("#spread_main_img");
  if(iCow) {

    var prevXY = { X: null, Y: null };
    // console.log("here is image position", centerPositionOfDiv(iCow));
    // console.log("here is image offset", iCow.offset())
    var cowInterval = setInterval(function () {
      if (prevXY.Y != mouseXY.Y || prevXY.X != mouseXY.X && (prevXY.Y != null || prevXY.X != null)) {
  
        var cowXY = centerPositionOfDiv(iCow)
        var diffX = cowXY.left - mouseXY.X;
        var diffY = cowXY.top - mouseXY.Y;
        var tan = diffY / diffX;
  
        var atan = Math.atan(tan) * 180 / Math.PI;;
        if (diffY > 0 && diffX > 0) {
  
          atan += 180;
        }
        else if (diffY < 0 && diffX > 0) {
  
          atan -= 180;
        }
  
        atan += -45
  
        prevXY.X = mouseXY.X;
        prevXY.Y = mouseXY.Y;
        iCow.css({ transform: "rotate(" + atan + "deg)" });
      }
    }, 10);
  }
}

function onClickOutside(e) {
  if (document.getElementById('finnie-pop-container')) {
    if (document.getElementById('finnie-pop-container').contains(e.target)) {
      // Clicked in box
    } else {
      // $('[data-toggle="popover"]').popover('hide');
      // console.log('outside')
      closePopover()
    }
  }
}
function closePopover() {
  $('[data-toggle="popover"]').popover('hide');
  window.removeEventListener('click', onClickOutside)
}
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
  $(".hover-text").on('click', function () {
    closePopover()
  })
  $('[data-toggle="popover"]').on('shown.bs.popover', function () {
    $("#icon-close").on('click', function () {
      closePopover()
    })
    window.addEventListener('click', onClickOutside)
  });
});
(jQuery)(function ($) {
  var pathname = window.location.pathname;
  var paths = pathname.split('/')
  // console.log({ paths })
  // ["", "learn", "about"]
  var category = '', subCat = ''
  if (paths.length === 2) {
    category = paths[1]
  } else if (paths.length >= 3) {
    category = paths[1]
    subCat = paths[2]
  }
  if (category === 'connect') {
    show_slide()
  }
  if (category === '') {
    isHomePage = true
    // home page
    revolution_show_video()
    wings_img_spin()
    $('#cbp-fwslider').cbpFWSlider();
  }else {
    isHomePage = false
  }
  setActiveMenu(category, subCat)
  $("#tap1").on('click', function () {
    $(".content-detail").each(function () {
      $(this).hide()
    })
    $(".tap1-content").show()
  })
  $("#tap3").on('click', function () {
    $(".content-detail").each(function () {
      $(this).hide()
    })
    $(".tap3-content").show()
  })
  $("#tap2").on('click', function () {
    $(".content-detail").each(function () {
      $(this).hide()
    })
    $(".tap2-content").show()
  })
  $(".content-detail .icon-close").click(function () {
    $(".content-detail").each(function () {
      $(this).hide()
    })
  })

  $(".btn-subscription").on('click', function () {
    var email = $('.input-subscription').val()

    if (isEmail(email)) {
      // alert('Thanks for joining Koi’s community!')
      dataLayer.push({ 'email': email });
      document.getElementById('showconfirm').style.display = "flex";
      document.getElementById('mc-embedded-subscribe-form').style.display = "none";
    } else {
      // console.log('ran')
      alert('You should input an email');
      return;
    }
  })

  $(".btn-signup").on('click', function () {
    var email = $('.input-signup').val()
    if (isEmail(email)) {
      // alert('Thanks for joining Koi’s community!')
      dataLayer.push({ 'email': email });
      document.getElementById('showconfirm1').style.display = "flex";
      document.getElementById('mc-embedded-signup-form').style.display = "none";
    } else {
      // console.log('ran')
      alert('You should input an email');
      return;
    }
  })

  $(".btn-submit").on('click', function () {
    var email = $('.input-submit').val()
    if (isEmail(email)) {
      // alert('Thanks for joining Koi’s community!')
      dataLayer.push({ 'email': email });
      document.getElementById('showconfirm2').style.display = "flex";
      document.getElementById('mc-embedded-submit-form').style.display = "none";
    } else {
      // console.log('ran')
      alert('You should input an email');
      return;
    }
  })
  $(".bbl-btn").mouseover(function () {
    let key = $(this).attr('data')
    // console.log("hover", ".btn" + key + "-hover")
    $(".btn" + key + "-hover").css('display', 'flex');
  })
  $(".bbl-btn-active").mouseleave(function () {
    $(this).css('display', 'none');
  });
  $(".lazy").lazyload(); // image and iframe lazy loading
  

})
window.addEventListener('load', (event) => {
  // console.log('page is fully loaded');
  $('.finnie-card').hover(function () {
    $(this).toggleClass('flipped');
  });
  if(isHomePage) {
    setTimeout(() => {
      $(".cbp-fwnext").trigger('click')
      nextFwCurrent()
      vertical_slider('next')
      setTimeout(() => {
        $(".cbp-fwnext").trigger('click')
        nextFwCurrent()
        vertical_slider('next')
      }, 1000)
    }, 500)
    $(".horizontal-roadmap-prev").click(function () {
      $(".cbp-fwprev").trigger('click')
      prevFwCurrent()
    });
    $(".horizontal-roadmap-next").click(function () {
      $(".cbp-fwnext").trigger('click')
      nextFwCurrent()
    });
    $(".vertical-roadmap-next").trigger('click')
    $(".vertical-roadmap-prev").click(function () {
      vertical_slider('prev')
    });
    $(".vertical-roadmap-next").click(function () {
      vertical_slider('next')
    });
  }
});