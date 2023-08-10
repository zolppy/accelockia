const button = document.getElementById('toggle-menu-button');
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => navItem.addEventListener('click', function() {
    navItems.forEach(navItem => navItem.classList.remove('actived'));

    navItem.classList.add('actived');
}));

button.addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebar.classList.toggle('expand');
    content.classList.toggle('retract');
});