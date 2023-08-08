const lis = document.querySelectorAll('.li');

lis.forEach(item => item.addEventListener('click', function() {
    lis.forEach(item => item.classList.remove('actived'));

    item.classList.add('actived');
}));

const button = document.getElementById('button');

button.addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');

    sidebar.classList.toggle('expand');
});