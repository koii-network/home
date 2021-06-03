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
$(document).ready(function() {
  var pathname = window.location.pathname;
  var paths = pathname.split('/')
  // ["", "learn", "about"]
  var category = '', subCat = ''
  if(paths.length === 2) {
    category = paths[1]
  }else if(paths.length === 3){
    category = paths[1]
    subCat = paths[2]
  }
  setActiveMenu(category, subCat)
})