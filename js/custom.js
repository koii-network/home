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