const menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
    )

    this.classList.add('ativo');
};

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
);

/* Expandir o menu */

const btnExp = document.querySelector('#btn-exp');
const menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
});