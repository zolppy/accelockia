const toggleMenuButton = document.getElementById('menu-toggle-button');
const navItems = document.querySelectorAll('.nav-item');

function removeAllActivedClasses() {
    navItems.forEach(navItem => navItem.classList.remove('active'));
}

navItems.forEach(navItem => navItem.addEventListener('click', function() {
    removeAllActivedClasses();
    navItem.classList.add('active');
}));

toggleMenuButton.addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebar.classList.toggle('expand');
    content.classList.toggle('retract');
});