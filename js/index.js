const passwordVisibilityButton = document.getElementById('password-visibility-button');

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input');
    const passwordIcon = document.getElementById('password-visibility-icon');

    if (passwordIcon.classList.contains('fa-eye-slash')) {
        passwordIcon.classList.replace('fa-eye-slash', 'fa-eye');
        passwordInput.type = 'text';
    } else {
        passwordIcon.classList.replace('fa-eye', 'fa-eye-slash');
        passwordInput.type = 'password';
    }
}

passwordVisibilityButton.addEventListener('click', function() {
    togglePasswordVisibility();
});