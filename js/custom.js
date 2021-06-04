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
    location.href = '/' + category + '/' + subMenu
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
$(document).ready(function() {
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
  $('.input-subscription').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      var email = $(this).val()
      if(isEmail(email)){
        goToMailchimp(email)
      }else{
        alert('You should input an email');  
        return ;
      }
    }
  });
  $(".btn-subscription").click(function(){
    var email = $('.input-subscription').val()
    if(isEmail(email)){
      goToMailchimp(email)
    }else{
      alert('You should input an email');  
      return ;
    }
  })
})