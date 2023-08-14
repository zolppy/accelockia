// Clears fields email and password when the page is fully loaded
window.addEventListener('load', () => {
    document.getElementById('email-input').value = '';
    document.getElementById('password-input').value = '';
});