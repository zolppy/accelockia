// Clears fields when the page is fully loaded
window.addEventListener('load', () => {
    const inputs = document.getElementsByTagName('input');

    for(let input of inputs) {
        input.value = '';
    }
});