var Categories = ['learn', 'earn', 'connect', 'explore']
function showSubMenu() {
  const subMenu = $("#sub_menu")
  if(subMenu.hasClass('active')) $("#sub_menu").removeClass('active')
  else $("#sub_menu").addClass('active')
}
function openSubMenu (category, subMenu) {
  console.log(category)
  console.log(subMenu)
  showSubMenu()
}