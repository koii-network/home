var Categories = ['learn', 'earn', 'connect', 'explore']
function showSubMenu(category, sm) {
  const subMenu = $("#sub_menu")
  subMenu.find('.sub-menu-container').css('display', 'none')
  subMenu.find('.sub-menu-container.sub-'+category).css('display', 'flex')
  if(subMenu.hasClass('active')) $("#sub_menu").removeClass('active')
  else $("#sub_menu").addClass('active')
}
function openSubMenu (category, subMenu) {
  // console.log(category)
  // console.log(subMenu)
  var pathname = window.location.pathname;
  if(pathname.includes('/' + category) || category === 'learn' || category === 'earn'){
    // console.log({pathname})
    showSubMenu(category, subMenu)
  }else{
    if(subMenu){
      location.href = '/' + category + '/' + subMenu
    }else{
      location.href = '/' + category
    }
  }
}
function setActiveMenu(category, subCategory) {
  console.log("category :", category)
  console.log("sub :", subCategory)
  if(category === '') { return }
  $("#topbar .web-header .nav-item").each(function(index, value){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }
  })
  $("#topbar .mobile-header .nav-item").each(function(index, value){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }
  })
  $("#sub_menu .sub-menu-container.sub-"+category+" .sub-menu-item").each(function(index, value){
    if($(this).hasClass('active')){
      $(this).removeClass('active')
    }
  })
  $("#topbar .web-header .nav-item.nav-" + category).addClass('active')
  $("#topbar .mobile-header .nav-item.nav-" + category).addClass('active')
  switch(category) {
    case 'learn':
      $("#sub_menu .sub-menu-container.sub-"+category+" .sub-menu-item.sub-menu-"+subCategory).addClass('active')
      break;
    case 'earn':
      $("#sub_menu .sub-menu-container.sub-"+category+" .sub-menu-item.sub-menu-"+subCategory).addClass('active')
      break;
    case 'connect':
      
      break;
    case 'explore':
      
      break;
    default :
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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
$(document).ready(function() {
  $("img.lazy").lazyload(); // image lazy loading
  var pathname = window.location.pathname;
  var paths = pathname.split('/')
  console.log({paths})
  // ["", "learn", "about"]
  var category = '', subCat = ''
  if(paths.length === 2) {
    category = paths[1]
  }else if(paths.length >= 3){
    category = paths[1]
    subCat = paths[2]
  }
  if(category === 'connect'){
    show_slide()
  }
  setActiveMenu(category, subCat)
  $("#tap1").click(function(){
    $(".content-detail").each(function(){
      $(this).hide()
    })
    $(".tap1-content").show()
  })
  $("#tap3").click(function(){
    $(".content-detail").each(function(){
      $(this).hide()
    })
    $(".tap3-content").show()
  })
  $("#tap2").click(function(){
    $(".content-detail").each(function(){
      $(this).hide()
    })
    $(".tap2-content").show()
  })
  $(".content-detail .icon-close").click(function(){
    $(".content-detail").each(function(){
      $(this).hide()
    })
  })
  
  $('.num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(getRupeesFormat(Math.ceil(now)));
        }
    });
});

function getRupeesFormat(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}

  $(".btn-subscription").click(function(){
    var email = $('.input-subscription').val()
    
    if(isEmail(email)){
      // alert('Thanks for joining Koi’s community!')
      dataLayer.push({'email': email });
      document.getElementById('showconfirm').style.display = "flex";
      document.getElementById('mc-embedded-subscribe-form').style.display = "none";
    }else{
      console.log('ran')
      alert('You should input an email');  
      return ;
    }
  })

  $(".btn-signup").click(function(){
    var email = $('.input-signup').val()
    if(isEmail(email)){
      // alert('Thanks for joining Koi’s community!')
      dataLayer.push({'email': email });
      document.getElementById('showconfirm1').style.display = "flex";
      document.getElementById('mc-embedded-signup-form').style.display = "none";
    }else{
      console.log('ran')
      alert('You should input an email');  
      return ;
    }
  })

  $(".btn-submit").click(function(){
    var email = $('.input-submit').val()
    if(isEmail(email)){
      // alert('Thanks for joining Koi’s community!')
      dataLayer.push({'email': email });
      document.getElementById('showconfirm2').style.display = "flex";
      document.getElementById('mc-embedded-submit-form').style.display = "none";
    }else{
      console.log('ran')
      alert('You should input an email');  
      return ;
    }
  })
  
})