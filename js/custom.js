var Categories = ['learn', 'earn', 'connect', 'explore']
function showSubMenu() {
  $("#sub_menu").css('height', '40px')
}
function openSubMenu (category, subMenu) {
  console.log(category)
  console.log(subMenu)
  showSubMenu()
}