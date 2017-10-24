var menu = document.querySelector('#menu');
var menuItems = [
    { 'Item': 'Dashboards', 'active': false, 'icon': 'dashboard' },
    { 'Item': 'Actividad Fisica', 'state': 'phisActivity', 'active': true, 'icon': 'fitness_center' },
    { 'Item': 'Pasos', 'active': false, 'icon': 'motorcycle' },
    { 'Item': 'Metas', 'active': false, 'icon': 'favorite' },
    { 'Item': 'Retos', 'active': false, 'icon': 'stars' }
];
var menuContext = { menuItems };
menu.innerHTML = ExpApp.menu(menuContext);