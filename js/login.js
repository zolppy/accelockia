const togglePasswordDisplayButton = document.getElementById('toggle-password-display-button');

function toggleDisplayPassword() {
    const input = document.getElementById('password-input-id');
    const icon = document.getElementById('foo');

    if (icon.classList.contains('fa-eye-slash')) {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        input.type = 'text';
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        input.type = 'password';
    }
}

togglePasswordDisplayButton.addEventListener('click', function() {
    toggleDisplayPassword();
});